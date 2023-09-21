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
  const altura = Number(prompt("Altura do retângulo"));
  const largura = Number(prompt("Largura do retângulo"));
  const area = altura * largura;
  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Em que ano você está?");
  const anoNascimento = prompt("Em que ano você nasceu?");
  console.log(Number(anoAtual) - Number(anoNascimento));
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt("Qual é o seu nome?");
  const idadeUsuario = prompt("Quantos anos você tem?");
  const emailUsuario = prompt("Digite o seu melhor e-mail:");
  console.log(
    `Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const primeiraCor = prompt("Qual a sua cor favorita?");
  const segundaCor = prompt("Qual a sua segunda cor favorita?");
  const terceiraCor = prompt("Qual a sua terceira cor favorita?");
  console.log([primeiraCor, segundaCor, terceiraCor]);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoIndice = array.length - 1;
  return array[ultimoIndice];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroItem = array[0];
  const ultimoItem = array[array.length - 1];
  const copiaArray = array.slice();

  copiaArray.shift();
  copiaArray.pop();
  copiaArray.unshift(ultimoItem);
  copiaArray.push(primeiroItem);

  return copiaArray;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}
