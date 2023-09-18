// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = +prompt("Escreva a altura do objeto")
const largura = +prompt("Escreva a largura do objeto")

area = altura * largura
console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = +prompt("Qual o ano atual?")
  const anoDeNascimento = +prompt("Qual o ano de seu nascimento?")

  idade = anoAtual - anoDeNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  IMC = peso / (altura * altura)
  return IMC
  

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  
  const nome = prompt("Qual o seu nome?")
  const idade = +prompt("Qual a sua idade?")
  const email = prompt("Qual o seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Qual suas cores favoritas?")
  const cor2 = prompt("Qual suas cores favoritas?")
  const cor3 = prompt("Qual suas cores favoritas?")
 
coresFav = [cor1, cor2, cor3]

console.log(coresFav)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  emMaiusculo = string.toUpperCase()
  return emMaiusculo

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const check1 = string1.length
  const check2 = string2.length

  checarTamanho = string1.length === string2.length
  return checarTamanho

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  return array.slice(0).reverse()

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const check1 = string1.toLowerCase()
  const check2 = string2.toLowerCase()
  checkIgual = check1 == check2

return checkIgual
}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = +prompt("Qual o ano atual?")
  const anoDeNascimento = +prompt("Qual o seu ano de nascimento?")
  const carteiraEmitida = +prompt("Em qual ano sua carteira foi tirada?")

  console.log(anoAtual - anoDeNascimento >= 20)
  console.log()
  console.log(anoAtual - anoDeNascimento >= 50)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const divPor4 = ano % 4 === 0
  const divPor100 = ano % 100 === 0
  const divPor400 = ano % 400 === 0

  const anoBi = divPor4 && (divPor100 && !divPor400)
  
}
  

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Tem mais de 18 anos?")
  const estudo = prompt("Tem ensino médio?")
  const disponibilidade = prompt("Tem disponibilidade de horários?")

  const check = idade == "sim" && estudo == "sim" && disponibilidade == "sim"

  console.log(check)

}