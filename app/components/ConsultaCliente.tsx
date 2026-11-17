
"use client";

import {
  useActionState,
  useEffect,
  useState,
  type FormEvent,
} from "react";

import {
  atualizarCliente,
  consultarClientePorCpf,
  type EstadoAtualizacao,
} from "@/app/actions";
import type { Cliente } from "@/types/Cliente";

const estadoInicial: EstadoAtualizacao = {
  sucesso: false,
  mensagem: "",
};

export default function ConsultaCliente() {
  const [cpf, setCpf] = useState("");
  const [cliente, setCliente] = useState<Cliente | null>(null);
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  const [editando, setEditando] = useState(false);

const [estadoAtualizacao, formAction, pendente] = useActionState(
  atualizarCliente,
  estadoInicial
);

useEffect(() => {
  if (estadoAtualizacao.sucesso && estadoAtualizacao.cliente) {
    setCliente(estadoAtualizacao.cliente);
    setEditando(false);
  }
}, [estadoAtualizacao]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setCliente(null);
    setMensagem("");
    setEditando(false);
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
      {editando ? "Editar dados do cliente" : "Dados do cliente"}
    </h3>

    {!editando ? (
      <>
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

       {estadoAtualizacao.sucesso &&
        estadoAtualizacao.cliente?.cpf === cliente.cpf && (
         <p className="mt-3 text-sm text-green-700" role="status">
          {estadoAtualizacao.mensagem}
        </p>
      )}

        <button
          type="button"
          onClick={() => setEditando(true)}
          className="mt-4 rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          Editar dados
        </button>
      </>
    ) : (
      <form action={formAction} className="space-y-4">
        <input
  type="hidden"
  name="cpf"
  value={cliente.cpf.replace(/\D/g, "")}
/>

        <div>
          <label htmlFor="editar-nome" className="mb-1 block font-medium">
            Nome
          </label>
          <input
            id="editar-nome"
            name="nome"
            type="text"
            defaultValue={cliente.nome}
            required
            maxLength={150}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
          />
          {estadoAtualizacao.erros?.nome && (
            <p className="mt-1 text-sm text-red-600">
              {estadoAtualizacao.erros.nome[0]}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="editar-telefone" className="mb-1 block font-medium">
            Telefone
          </label>
          <input
            id="editar-telefone"
            name="telefone"
            type="tel"
            defaultValue={cliente.telefone}
            required
            maxLength={15}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
          />
          {estadoAtualizacao.erros?.telefone && (
            <p className="mt-1 text-sm text-red-600">
              {estadoAtualizacao.erros.telefone[0]}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="editar-endereco" className="mb-1 block font-medium">
            Endereço
          </label>
          <input
            id="editar-endereco"
            name="endereco"
            type="text"
            defaultValue={cliente.endereco}
            required
            maxLength={250}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
          />
          {estadoAtualizacao.erros?.endereco && (
            <p className="mt-1 text-sm text-red-600">
              {estadoAtualizacao.erros.endereco[0]}
            </p>
          )}
        </div>

        {estadoAtualizacao.mensagem && (
          <p
            className={
              estadoAtualizacao.sucesso
                ? "text-sm text-green-700"
                : "text-sm text-red-600"
            }
            role="status"
          >
            {estadoAtualizacao.mensagem}
          </p>
        )}

        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            disabled={pendente}
            className="rounded-md bg-green-700 px-5 py-2 text-white hover:bg-green-800 disabled:opacity-50"
          >
            {pendente ? "Salvando..." : "Salvar alterações"}
          </button>

          <button
            type="button"
            onClick={() => setEditando(false)}
            disabled={pendente}
            className="rounded-md bg-gray-300 px-5 py-2 text-gray-800 hover:bg-gray-400 disabled:opacity-50"
          >
            Cancelar
          </button>
        </div>
      </form>
    )}
  </div>
)}

    </section>
  );
}
