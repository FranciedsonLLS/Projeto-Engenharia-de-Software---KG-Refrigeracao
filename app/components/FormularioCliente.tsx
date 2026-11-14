
"use client";

import { useActionState } from "react";
import {
  cadastrarCliente,
  type EstadoCadastro,
} from "@/app/actions";

const estadoInicial: EstadoCadastro = {
  sucesso: false,
  mensagem: "",
};

export default function FormularioCliente() {
  const [estado, formAction, pendente] = useActionState(
    cadastrarCliente,
    estadoInicial
  );

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label htmlFor="cpf" className="mb-1 block font-medium">
          CPF
        </label>
        <input
          id="cpf"
          name="cpf"
          type="text"
          placeholder="000.000.000-00"
          required
          maxLength={14}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
        />
        {estado.erros?.cpf && (
          <p className="mt-1 text-sm text-red-600">
            {estado.erros.cpf[0]}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="nome" className="mb-1 block font-medium">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          placeholder="Nome completo"
          required
          maxLength={150}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
        />
        {estado.erros?.nome && (
          <p className="mt-1 text-sm text-red-600">
            {estado.erros.nome[0]}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="telefone" className="mb-1 block font-medium">
          Telefone
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          placeholder="(00) 00000-0000"
          required
          maxLength={15}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
        />
        {estado.erros?.telefone && (
          <p className="mt-1 text-sm text-red-600">
            {estado.erros.telefone[0]}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="endereco" className="mb-1 block font-medium">
          Endereço
        </label>
        <input
          id="endereco"
          name="endereco"
          type="text"
          placeholder="Rua, número, bairro e cidade"
          required
          maxLength={250}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
        />
        {estado.erros?.endereco && (
          <p className="mt-1 text-sm text-red-600">
            {estado.erros.endereco[0]}
          </p>
        )}
      </div>

      {estado.mensagem && (
        <p
          className={
            estado.sucesso
              ? "text-sm text-green-700"
              : "text-sm text-red-600"
          }
        >
          {estado.mensagem}
        </p>
      )}

      <button
        type="submit"
        disabled={pendente}
        className="w-full rounded-lg bg-blue-700 px-4 py-3 font-semibold text-white hover:bg-blue-800 disabled:opacity-50"
      >
        {pendente ? "Cadastrando..." : "Cadastrar cliente"}
      </button>
    </form>
  );
}
