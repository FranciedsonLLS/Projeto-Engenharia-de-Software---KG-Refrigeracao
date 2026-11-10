
export type StatusCliente = "ATIVO" | "INATIVO";

export interface Cliente {
  id: number;
  cpf: string;
  nome: string;
  telefone: string;
  endereco: string;
  status: StatusCliente;
}
