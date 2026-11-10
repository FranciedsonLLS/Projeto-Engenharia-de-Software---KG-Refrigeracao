
import "server-only";

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

import type { Cliente } from "@/types/Cliente";
import type { ClienteRepository } from "./ClienteRepository";

export class JsonClienteRepository implements ClienteRepository {
  private readonly caminhoArquivo = join(
    process.cwd(),
    "data",
    "clientes.json"
  );

  private normalizarCpf(cpf: string): string {
    return cpf.replace(/\D/g, "");
  }

  private validarDados(
    dados: Pick<Cliente, "cpf" | "nome" | "telefone" | "endereco">
  ): void {
    const cpf = this.normalizarCpf(dados.cpf);

    if (!/^\d{11}$/.test(cpf)) {
      throw new Error("O CPF deve possuir exatamente 11 dígitos.");
    }

    if (!dados.nome.trim() || dados.nome.trim().length > 150) {
      throw new Error("O nome deve ter entre 1 e 150 caracteres.");
    }

    if (!dados.telefone.trim() || dados.telefone.trim().length > 15) {
      throw new Error("O telefone deve ter entre 1 e 15 caracteres.");
    }

    if (!dados.endereco.trim() || dados.endereco.trim().length > 250) {
      throw new Error("O endereço deve ter entre 1 e 250 caracteres.");
    }
  }

  private async lerDados(): Promise<Cliente[]> {
    try {
      const conteudo = await readFile(this.caminhoArquivo, "utf-8");
      return JSON.parse(conteudo.replace(/^\uFEFF/, "")) as Cliente[];
    } catch (erro) {
      if ((erro as NodeJS.ErrnoException).code === "ENOENT") {
        return [];
      }

      throw erro;
    }
  }

  private async salvarDados(clientes: Cliente[]): Promise<void> {
    await mkdir(join(process.cwd(), "data"), { recursive: true });

    await writeFile(
      this.caminhoArquivo,
      JSON.stringify(clientes, null, 2),
      "utf-8"
    );
  }

  async criar(
    dados: Omit<Cliente, "id" | "status">
  ): Promise<Cliente> {
    const clientes = await this.lerDados();

    this.validarDados(dados);

    const cpf = this.normalizarCpf(dados.cpf);

    const existente = clientes.find(
      (cliente) => cliente.cpf === cpf
    );

    if (existente) {
      throw new Error("Já existe um cliente cadastrado com este CPF.");
    }

    const proximoId =
      clientes.reduce(
        (maiorId, cliente) => Math.max(maiorId, cliente.id),
        0
      ) + 1;

    const novoCliente: Cliente = {
      ...dados,
      cpf,
      id: proximoId,
      status: "ATIVO",
    };

    clientes.push(novoCliente);
    await this.salvarDados(clientes);

    return novoCliente;
  }

  async listar(): Promise<Cliente[]> {
    const clientes = await this.lerDados();

    return clientes.filter(
      (cliente) => cliente.status === "ATIVO"
    );
  }

  async buscarPorCpf(cpf: string): Promise<Cliente | null> {
    const clientes = await this.lerDados();
    const cpfNormalizado = this.normalizarCpf(cpf);

    return (
      clientes.find(
        (cliente) => cliente.cpf === cpfNormalizado
      ) ?? null
    );
  }

  async atualizar(
    cpf: string,
    dados: Partial<Pick<Cliente, "nome" | "telefone" | "endereco">>
  ): Promise<Cliente | null> {
    const clientes = await this.lerDados();
    const cpfNormalizado = this.normalizarCpf(cpf);

    const indice = clientes.findIndex(
      (cliente) => cliente.cpf === cpfNormalizado
    );

    if (indice === -1) {
      return null;
    }

    const clienteAtualizado = {
      ...clientes[indice],
      ...dados,
    };

    this.validarDados(clienteAtualizado);

    clientes[indice] = clienteAtualizado;

    await this.salvarDados(clientes);

    return clientes[indice];
  }

  async inativar(cpf: string): Promise<Cliente | null> {
    const clientes = await this.lerDados();
    const cpfNormalizado = this.normalizarCpf(cpf);

    const cliente = clientes.find(
      (cliente) => cliente.cpf === cpfNormalizado
    );

    if (!cliente) {
      return null;
    }

    cliente.status = "INATIVO";

    await this.salvarDados(clientes);

    return cliente;
  }
}
