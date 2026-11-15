
"use client";

import { useMemo, useState } from "react";
import type { Cliente } from "@/types/Cliente";

interface ListaClientesProps {
  clientes: Cliente[];
}

export default function ListaClientes({ clientes }: ListaClientesProps) {
  const [busca, setBusca] = useState("");

  const clientesFiltrados = useMemo(() => {
    const termo = busca
      .trim()
      .toLocaleLowerCase("pt-BR")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const cpfBusca = termo.replace(/\D/g, "");

    return clientes.filter((cliente) => {
      const nome = cliente.nome
        .toLocaleLowerCase("pt-BR")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      const encontrouNome = nome.includes(termo);
      const encontrouCpf =
        cpfBusca.length > 0 && cliente.cpf.includes(cpfBusca);

      return encontrouNome || encontrouCpf;
    });
  }, [clientes, busca]);

  function formatarCpf(cpf: string) {
    const numeros = cpf.replace(/\D/g, "");

    if (numeros.length !== 11) return cpf;

    return numeros.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      "$1.$2.$3-$4"
    );
  }

  return (
    <section className="mt-10">
      <h2 className="mb-4 text-xl font-bold">
        Clientes cadastrados
      </h2>

      <input
        type="search"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Buscar por nome ou CPF"
        className="mb-5 w-full rounded-lg border border-gray-300 px-4 py-3"
      />

      {clientes.length === 0 ? (
        <p className="rounded-lg bg-gray-100 p-4 text-gray-600">
          Nenhum cliente ativo cadastrado.
        </p>
      ) : clientesFiltrados.length === 0 ? (
        <p className="rounded-lg bg-gray-100 p-4 text-gray-600">
          Nenhum cliente encontrado para essa busca.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="p-3">CPF</th>
                <th className="p-3">Nome</th>
                <th className="p-3">Telefone</th>
              </tr>
            </thead>

            <tbody>
              {clientesFiltrados.map((cliente) => (
                <tr key={cliente.id} className="border-b">
                  <td className="p-3">
                    {formatarCpf(cliente.cpf)}
                  </td>
                  <td className="p-3">{cliente.nome}</td>
                  <td className="p-3">{cliente.telefone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
