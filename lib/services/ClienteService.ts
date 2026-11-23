import {
  normalizarCpf,
  validarCpf,
} from "@/lib/validations/cpf";
import type { Cliente } from "@/types/Cliente";
import type { ClienteRepository } from "@/lib/repositories/ClienteRepository";

type DadosCadastroCliente = Omit<Cliente, "id" | "status">;

export class ClienteService {
  constructor(
    private readonly clienteRepository: ClienteRepository
  ) {}

  async cadastrar(
    dados: DadosCadastroCliente
  ): Promise<Cliente> {
    if (!validarCpf(dados.cpf)) {
      throw new Error("Informe um CPF válido.");
    }

    const cpf = normalizarCpf(dados.cpf);

    const clienteExistente =
      await this.clienteRepository.buscarPorCpf(cpf);

    if (clienteExistente) {
      throw new Error(
        "Já existe um cliente cadastrado com este CPF."
      );
    }

    return this.clienteRepository.criar({
      ...dados,
      cpf,
    });
  }
}