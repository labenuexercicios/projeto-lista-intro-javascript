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
let lado1 = prompt("Escolha um valor para a base de um quadrilatero")
let lado2 = prompt("Escolha um valor para a altura de um quadrilatero")
let area = lado1*lado2
console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoatual = prompt("Qual é o ano atual?")
  let anonascimento = prompt("Qual o ano do seu nascimento?")
  let idade = anoatual - anonascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let imc = (peso / (altura*altura))
  return imc 

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual o seu nome?")
  const idade = prompt("Qual a sua idade?")
  const email = prompt("Qual o seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Qual a sua cor favorita?")
const cor2 = prompt("Qual a sua cor favorita?")
const cor3 = prompt("Qual a sua cor favorita?")
cores = [cor1, cor2, cor3]
console.log(cores)
}


// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const fraseMaiuscula = string.toUpperCase()
return fraseMaiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
let lucro = custo / valorIngresso
return lucro
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
const tamanho1 = string1.length
const tamanho2 = string2.length
const tamanhosIguais = tamanho1 === tamanho2
return tamanhosIguais
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
const primeiroElemento = array[0];
return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
const tamanhoarray = array.length
const ultimoElemento = array[tamanhoarray - 1] 
return ultimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroNumero = array[0]
  const ultimoNumero = array[array.length-1]
  array[0] = ultimoNumero
  array[array.length-1] = primeiroNumero
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const string1Maiuscula = string1.toUpperCase()
  const string2Maiuscula = string2.toUpperCase()
  const igual = (string1Maiuscula === string2Maiuscula)
  return igual
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number( prompt("Qual o ano atual?") )
  let anoNascimento = Number( prompt("Qual o ano do seu nascimento") )
  let anoEmissao = Number( prompt("Em que ano a sua identidade foi emitida?") )
  let idade = Number( anoAtual - anoNascimento)
  const renovacao20 = ( ( idade <= 20 ) && (anoAtual - anoEmissao >= 5) )
  const renovacao50 = ( ( idade > 20 && idade <= 50 ) &&  (anoAtual - anoEmissao >= 10 ) ) 
  const renovacao50Mais = ( ( idade > 50 ) && ( anoAtual - anoEmissao >= 15 ) )
  console.log(renovacao20 || renovacao50 || renovacao50Mais)
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let anoBissexto400 = ano % 400 === 0
  let anoBissexto4 = ano % 4 === 0 
  let anoBissexto100 = ano % 100 === 0 
  return (anoBissexto400 || (anoBissexto4 && !anoBissexto100)) 

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maior = prompt("Você é maior de idade? (Responda com sim ou nao)")
  const ensinoMedio = prompt("Você possui ensino medio completo? (Responda com sim ou nao)")
  const horario = prompt("Você tem disponibilidade exclusiva durante o horario do curso? (Responda com sim ou nao)")
  console.log(maior === "sim" && ensinoMedio === "sim" && horario ==="sim")
}