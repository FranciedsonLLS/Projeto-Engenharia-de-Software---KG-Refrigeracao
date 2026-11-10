
import type { Cliente } from "@/types/Cliente";

export interface ClienteRepository {
  criar(
    cliente: Omit<Cliente, "id" | "status">
  ): Promise<Cliente>;

  listar(): Promise<Cliente[]>;

  buscarPorCpf(cpf: string): Promise<Cliente | null>;

  atualizar(
    cpf: string,
    dados: Partial<Pick<Cliente, "nome" | "telefone" | "endereco">>
  ): Promise<Cliente | null>;

  inativar(cpf: string): Promise<Cliente | null>;
}
