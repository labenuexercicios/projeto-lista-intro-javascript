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
function calculaAreaRetangulo(altura, largura) {
  altura = prompt("Num 1: ");
  largura = prompt("Num 2: ");
  const resultado = altura * largura;
  console.log(resultado);
}

// EXERCÍCIO 02
function imprimeIdade(anoNascimento, anoAtual) {
  anoNascimento = prompt("Digite seu ano de nascimento: ");
  anoAtual = prompt("Digite o ano atual: ");
  const resultado = anoNascimento - anoAtual;
  console.log(resultado);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const resultado = peso / (altura * altura);
  return resultado;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(usuario) {
  // implemente sua lógica aqui
  const nome = prompt("Digite seu nome: ");
  const idade = prompt("Digite sua idade: ");
  const email = prompt("Digite seu email: ");
  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );

  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cores = ["", "", ""];
  cores[0] = prompt("Digite a Cor 1: ");
  cores[1] = prompt("Digite a Cor 2: ");
  cores[2] = prompt("Digite a Cor 3: ");
  console.log(cores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string = string.toUpperCase();
  return string;
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const checagem = string1.length === string2.length;
  return checagem;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiro = array[array.length - 1];
  const ultimo = array[0];
  array.shift();
  array.pop();
  array.unshift(primeiro);
  array.push(ultimo);
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  var anoAtual = Number(prompt("Digite o ano atual:"));
  var anoNascimento = Number(prompt("Digite o ano de nascimento:"));
  var anoEmissao = Number(
    prompt("Digite o ano de emissão da carteira de identidade:")
  );

  var idade = anoAtual - anoNascimento;
  var anosDesdeEmissao = anoAtual - anoEmissao;

  var primeiraCondicao = idade <= 20 && anosDesdeEmissao >= 5;
  var segundaCondicao = idade > 20 && idade <= 50 && anosDesdeEmissao >= 10;
  var terceiraCondicao = idade > 50 && anosDesdeEmissao >= 15;

  var precisaRenovar = primeiraCondicao || segundaCondicao || terceiraCondicao;

  console.log(precisaRenovar);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu(idade, ensino, disponibilidade) {
  // implemente sua lógica aqui
  idade = confirm(
    "Tem 18 ou mais anos? Clique em 'Ok' para SIM e 'Cancelar' para NAO."
  );
  ensino = confirm(
    "Tem ensino médio completo? Clique em 'Ok' para SIM e 'Cancelar' para NAO."
  );
  disponibilidade = confirm(
    "Tem disponibilidade exclusiva? Clique em 'Ok' para SIM e 'Cancelar' para NAO."
  );

  const aprovado = idade && ensino && disponibilidade;
  console.log(aprovado);
}
