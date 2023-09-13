// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui

  return num1 + num2
}
soma(4, 5)
// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura01 = Number(prompt('digite a altura'))
  let largura01 = Number(prompt('digite a largura'))
  let areaRetangulo = altura01 * largura01
  console.log(areaRetangulo);
}

// EXERCÍCIO 02

function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = +(prompt('digite o ano atual'))
  const anoNasc = +(prompt('digite o ano do seu nascimento'))
  const idade = anoAtual - anoNasc
  console.log(idade);
}

// EXERCÍCIO 03

function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  //let peso = Number(prompt('digite seu peso'))
  //let altura = Number(prompt('digite sua altura'))
  let imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt('Digite seu nome')
  let idade = prompt('Digite sua idade')
  let email = prompt('Digite seu email')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let coresInformada = []
  let cor1 = prompt('Informe sua primera cor favorita')
  let cor2 = prompt('Informe sua segunda cor favorita')
  let cor3 = prompt('Informe sua terceira cor favorita')  
   coresInformada.push(cor1)
   coresInformada.push(cor2)
   coresInformada.push(cor3)
   console.log(coresInformada);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let novaFrase = string  
  novaFrase = prompt('escreva uma frase')  
    let novaString = novaFrase.toUpperCase()
  console.log(novaString);
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

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