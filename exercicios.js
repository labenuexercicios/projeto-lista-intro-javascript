// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("Digite a altura");
  const largura = prompt("Digite a largura");
  console.log(altura * largura);
}

// EXERCÍCIO 02
function imprimeIdade() {
  //   implemente sua lógica aqui
  const anoAtual = prompt("Digite a altura");
  const anoDeNascimento = prompt("Digite a largura");
  const idade = anoAtual - anoDeNascimento;
  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const IMC = peso / (altura * altura);
  return IMC;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite o seu nome: ");
  const idade = prompt("Digite o seu idade: ");
  const email = prompt("Digite o seu email: ");
  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite sua cor favorita: ");
  const cor2 = prompt("Digite sua cor favorita: ");
  const cor3 = prompt("Digite sua cor favorita: ");
  const cores = [cor1, cor2, cor3];
  console.log(cores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const toUpperCase = string.toUpperCase();
  return toUpperCase;
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop();
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0];
  const ultimoElemento = array[array.length - 1];

  array[0] = ultimoElemento;
  array[array.length - 1] = primeiroElemento;

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return Boolean(string1.toUpperCase() === string2.toUpperCase());
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Digite o ano atual: ");
  const anoDeNascimento = prompt("Digite o ano de nascimento: ");
  const anoDeAdmissao = prompt("Digite o ano de admissao: ");
  if (anoAtual - anoDeNascimento <= 20) {
    const precisaRenovar = anoAtual - anoDeAdmissao >= 5;
    console.log(Boolean(precisaRenovar));
  } else if (
    anoAtual - anoDeNascimento > 20 &&
    anoAtual - anoDeNascimento <= 50
  ) {
    const precisaRenovar = anoAtual - anoDeAdmissao >= 10;
    console.log(Boolean(precisaRenovar));
  } else if (anoAtual - anoDeNascimento > 50) {
    const precisaRenovar = anoAtual - anoDeAdmissao > 15;
    console.log(Boolean(precisaRenovar));
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const bissexto = ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0);
  return Boolean(bissexto);
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const age = prompt("tem mais de 18?: ").toUpperCase();
  const degree = prompt("tem ensino médio completo?: ").toUpperCase();
  const schedule = prompt("tem disponibilidade de horários?: ").toUpperCase();

  let inscricao = false;

  if (age === "SIM" || age === "S") {
  } else if (age === "NAO" || age === "NÃO" || age === "N") {
  } else {
    console.log("Resposta inválida. Insira sim ou não!");
  }

  if (degree === "SIM" || degree === "S") {
  } else if (degree === "NAO" || degree === "NÃO" || degree === "N") {
  } else {
    console.log("Resposta inválida. Insira sim ou não!");
  }

  if (schedule === "SIM" || schedule === "S") {
  } else if (schedule === "NAO" || schedule === "NÃO" || schedule === "N") {
  } else {
    console.log("Resposta inválida. Insira sim ou não!");
  }

  if (age === "SIM" && degree === "SIM" && schedule === "SIM") {
    inscricao = true;
  }
  console.log(inscricao);
}
