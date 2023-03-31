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
  // implemente sua lógica aqui
  const altura = prompt(`digite sua altura!`)
  const largura = prompt(`digite sua largura`)
  const area = altura*largura
  console.log(area)

  
}


// EXERCÍCIO 02
function imprimeIdade() {
  let ano = prompt("qual ano nos estamos")
  let idade = prompt("que ano vc nasceu")
  
  console.log(ano - idade)

}

// EXERCÍCIO 03
const peso = prompt("insira seu peso:")
const altura = prompt("insira sua altura")
 
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  const imc = peso/(altura*altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt(`qual seu nome?`)
  const idade = prompt(`qual sua idade?`)
  const email = prompt(`qual seu email?`)

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt(`qual sua cor1 favorita`)
  const cor2 = prompt(`qual sua cor2 favorita`)
  const cor3 = prompt(`qual sua cor3 favorita`)

  const cores = [cor1, cor2, cor3]
  console.log(cores)

}


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  
  const stringToUpperCase = string.toUpperCase()

  console.log(stringToUpperCase)
 return stringToUpperCase
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  const total = custo/valorIngresso
  return total

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  const compara = (string1.length === string2.length)
  console.log(compara)
  return compara
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui'
  
  const final = array[array.length -1]

 

 return final

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiro = array[0]
  const ultimo = array[array.length-1]

  array[0] = ultimo
  array[array.length-1] = primeiro

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui


  const compara = (string1.toLowerCase() === string2.toLowerCase())
  console.log(compara)
  return compara

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Qual ano nos estamos?")
  const anoNascimento = prompt("Qual seu ano de nascimento?")
  const anoCarteira = prompt("Qual ano sua carteira foi emitida")

  const idadePessoa = anoAtual - anoNascimento
  const tempoCarteira = anoAtual -  anoCarteira


  const condicao1 = (idadePessoa <= 20, tempoCarteira <= 5) 
  const condicao2 = (20 < idadePessoa >= 50, tempoCarteira <= 10)
  const condicao3 = (idadePessoa > 50, tempoCarteira < 15)

  console.log(condicao1 && condicao2 && condicao3)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}