export function normalizarCpf(cpf: string): string {
  return cpf.trim().replace(/[.-]/g, "");
}

function calcularDigito(cpfBase: string, pesos: number[]): number {
  const soma = [...cpfBase].reduce(
    (total, digito, indice) =>
      total + Number(digito) * pesos[indice],
    0
  );

  const resto = soma % 11;

  return resto < 2 ? 0 : 11 - resto;
}

export function validarCpf(cpf: string): boolean {
  const cpfInformado = cpf.trim();

  const formatoValido =
    /^\d{11}$/.test(cpfInformado) ||
    /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpfInformado);

  if (!formatoValido) {
    return false;
  }

  const cpfNormalizado = normalizarCpf(cpfInformado);

  if (/^(\d)\1{10}$/.test(cpfNormalizado)) {
    return false;
  }

  const noveDigitos = cpfNormalizado.slice(0, 9);

  const primeiroDigito = calcularDigito(
    noveDigitos,
    [10, 9, 8, 7, 6, 5, 4, 3, 2]
  );

  const dezDigitos = noveDigitos + primeiroDigito;

  const segundoDigito = calcularDigito(
    dezDigitos,
    [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
  );

  return (
    cpfNormalizado ===
    `${noveDigitos}${primeiroDigito}${segundoDigito}`
  );
}
