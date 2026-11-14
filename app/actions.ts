
"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

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
