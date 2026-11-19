
"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import type { Cliente } from "@/types/Cliente";
import { JsonClienteRepository } from "@/lib/repositories/JsonClienteRepository";

const clienteSchema = z.object({
  cpf: z.string().trim().min(1, "Informe o CPF.").max(14),
  nome: z.string().trim().min(1, "Informe o nome.").max(150),
  telefone: z.string().trim().min(1, "Informe o telefone.").max(15),
  endereco: z.string().trim().min(1, "Informe o endereço.").max(250),
});

export type EstadoCadastro = {
  sucesso: boolean;
  mensagem: string;
  erros?: {
    cpf?: string[];
    nome?: string[];
    telefone?: string[];
    endereco?: string[];
  };
};

export async function cadastrarCliente(
  estadoAnterior: EstadoCadastro,
  formData: FormData
): Promise<EstadoCadastro> {
  const dados = {
    cpf: String(formData.get("cpf") ?? ""),
    nome: String(formData.get("nome") ?? ""),
    telefone: String(formData.get("telefone") ?? ""),
    endereco: String(formData.get("endereco") ?? ""),
  };

  const validacao = clienteSchema.safeParse(dados);

  if (!validacao.success) {
    return {
      sucesso: false,
      mensagem: "Verifique os campos informados.",
      erros: validacao.error.flatten().fieldErrors,
    };
  }

  try {
    const repositorio = new JsonClienteRepository();

    await repositorio.criar(validacao.data);

    revalidatePath("/");

    return {
      sucesso: true,
      mensagem: "Cliente cadastrado com sucesso!",
    };
  } catch (erro) {
    return {
      sucesso: false,
      mensagem:
        erro instanceof Error
          ? erro.message
          : "Não foi possível cadastrar o cliente.",
    };
  }
}

const cpfConsultaSchema = z
  .string()
  .regex(/^\d{11}$/, "Informe um CPF com 11 números.");

type ResultadoConsulta = {
  cliente: Cliente | null;
  mensagem: string;
};

export async function consultarClientePorCpf(
  cpf: string
): Promise<ResultadoConsulta> {
  const validacao = cpfConsultaSchema.safeParse(cpf);

  if (!validacao.success) {
    return {
      cliente: null,
      mensagem: "Informe um CPF válido com 11 números.",
    };
  }

  try {
    const repositorio = new JsonClienteRepository();
    const cliente = await repositorio.buscarPorCpf(validacao.data);

    if (!cliente) {
      return {
        cliente: null,
        mensagem: "Cliente não encontrado",
      };
    }

    return {
      cliente,
      mensagem: "",
    };
  } catch {
    return {
      cliente: null,
      mensagem: "Não foi possível consultar o cliente.",
    };
  }
}
const atualizarClienteSchema = z.object({
  cpf: z.string().regex(/^\d{11}$/, "CPF inválido."),
  nome: z.string().trim().min(1, "Informe o nome.").max(150),
  telefone: z.string().trim().min(1, "Informe o telefone.").max(15),
  endereco: z.string().trim().min(1, "Informe o endereço.").max(250),
});

export type EstadoAtualizacao = {
  sucesso: boolean;
  mensagem: string;
  cliente?: Cliente;
  erros?: {
    cpf?: string[];
    nome?: string[];
    telefone?: string[];
    endereco?: string[];
  };
};

export async function atualizarCliente(
  estadoAnterior: EstadoAtualizacao,
  formData: FormData
): Promise<EstadoAtualizacao> {
  const dados = {
    cpf: String(formData.get("cpf") ?? ""),
    nome: String(formData.get("nome") ?? ""),
    telefone: String(formData.get("telefone") ?? ""),
    endereco: String(formData.get("endereco") ?? ""),
  };

  const validacao = atualizarClienteSchema.safeParse(dados);

  if (!validacao.success) {
    return {
      sucesso: false,
      mensagem: "Verifique os campos informados.",
      erros: validacao.error.flatten().fieldErrors,
    };
  }

  try {
    const repositorio = new JsonClienteRepository();

    const clienteAtualizado = await repositorio.atualizar(
      validacao.data.cpf,
      {
        nome: validacao.data.nome,
        telefone: validacao.data.telefone,
        endereco: validacao.data.endereco,
      }
    );

    if (!clienteAtualizado) {
      return {
        sucesso: false,
        mensagem: "Cliente não encontrado.",
      };
    }

    revalidatePath("/");

    return {
      sucesso: true,
      mensagem: "Dados do cliente atualizados com sucesso!",
      cliente: clienteAtualizado,
    };
  } catch (erro) {
    return {
      sucesso: false,
      mensagem:
        erro instanceof Error
          ? erro.message
          : "Não foi possível atualizar o cliente.",
    };
  }
}
const cpfInativacaoSchema = z
  .string()
  .regex(/^\d{11}$/, "Informe um CPF com 11 números.");

type ResultadoInativacao = {
  sucesso: boolean;
  mensagem: string;
  cliente?: Cliente;
};

export async function inativarCliente(
  cpf: string
): Promise<ResultadoInativacao> {
  const validacao = cpfInativacaoSchema.safeParse(cpf);

  if (!validacao.success) {
    return {
      sucesso: false,
      mensagem: "Informe um CPF válido.",
    };
  }

  try {
    const repositorio = new JsonClienteRepository();

    const clienteInativado = await repositorio.inativar(
      validacao.data
    );

    if (!clienteInativado) {
      return {
        sucesso: false,
        mensagem: "Cliente não encontrado.",
      };
    }

    revalidatePath("/");

    return {
      sucesso: true,
      mensagem: "Cliente inativado com sucesso!",
      cliente: clienteInativado,
    };
  } catch (erro) {
    return {
      sucesso: false,
      mensagem:
        erro instanceof Error
          ? erro.message
          : "Não foi possível inativar o cliente.",
    };
  }
}