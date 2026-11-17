
"use client";

import { useState, type FormEvent } from "react";
import { consultarClientePorCpf } from "@/app/actions";
import type { Cliente } from "@/types/Cliente";

export default function ConsultaCliente() {
  const [cpf, setCpf] = useState("");
  const [cliente, setCliente] = useState<Cliente | null>(null);
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setCliente(null);
    setMensagem("");
    setCarregando(true);

    try {
      const resultado = await consultarClientePorCpf(cpf);

      setCliente(resultado.cliente);
      setMensagem(resultado.mensagem);
    } finally {
      setCarregando(false);
    }
  }

  function formatarCpf(valor: string) {
    return valor.replace(
      /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
      "$1.$2.$3-$4"
    );
  }

  return (
    <section className="mb-8 rounded-lg border border-gray-200 p-6">
      <h2 className="mb-4 text-xl font-semibold">
        Consultar cliente
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          inputMode="numeric"
          maxLength={11}
          value={cpf}
          onChange={(event) => {
            setCpf(event.target.value.replace(/\D/g, "").slice(0, 11));
            setCliente(null);
            setMensagem("");
          }}
          placeholder="Digite o CPF do cliente"
          className="flex-1 rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
        />

        <button
          type="submit"
          disabled={cpf.length !== 11 || carregando}
          className="rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {carregando ? "Consultando..." : "Consultar"}
        </button>
      </form>

      {mensagem && (
        <p className="mt-4 text-sm text-red-600" role="status">
          {mensagem}
        </p>
      )}

      {cliente && (
        <div className="mt-5 rounded-md bg-gray-50 p-4">
          <h3 className="mb-3 font-semibold text-gray-800">
            Dados do cliente
          </h3>

          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>CPF:</strong> {formatarCpf(cliente.cpf)}
            </p>
            <p>
              <strong>Nome:</strong> {cliente.nome}
            </p>
            <p>
              <strong>Telefone:</strong> {cliente.telefone}
            </p>
            <p>
              <strong>Endereço:</strong> {cliente.endereco}
            </p>
            <p>
              <strong>Status:</strong> {cliente.status}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
