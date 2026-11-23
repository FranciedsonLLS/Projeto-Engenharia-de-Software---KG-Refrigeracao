export function validarNome(nome: string): boolean {
  const nomeNormalizado = nome.trim().replace(/\s+/g, " ");

  if (nomeNormalizado.length < 3 || nomeNormalizado.length > 150) {
    return false;
  }

  return /^[\p{L}\p{M}]+(?:[ '\u2019-][\p{L}\p{M}]+)*$/u.test(
    nomeNormalizado
  );
}

export function validarTelefone(telefone: string): boolean {
  const telefoneInformado = telefone.trim();

  const formatoValido =
    /^\d{10,11}$/.test(telefoneInformado) ||
    /^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(telefoneInformado);

  if (!formatoValido) {
    return false;
  }

  const digitos = telefoneInformado.replace(/\D/g, "");
  const ddd = Number(digitos.slice(0, 2));
  const numero = digitos.slice(2);

  if (ddd < 11) {
    return false;
  }

  if (/^(\d)\1+$/.test(numero)) {
    return false;
  }

  const crescente = [...numero].every(
    (digito, indice) =>
      indice === 0 ||
      Number(digito) === (Number(numero[indice - 1]) + 1) % 10
  );

  const decrescente = [...numero].every(
    (digito, indice) =>
      indice === 0 ||
      Number(digito) === (Number(numero[indice - 1]) + 9) % 10
  );

  if (crescente || decrescente) {
    return false;
  }

  if (numero.length === 9) {
    return /^9\d{8}$/.test(numero);
  }

  return /^[2-5]\d{7}$/.test(numero);
}