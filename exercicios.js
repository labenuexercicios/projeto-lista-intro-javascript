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
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  const area = altura * largura
  console.log(area)

}


// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  // implemente sua lógica aqui
  const idade = anoAtual - anoNascimento
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  nome = prompt("Qual seu nome?")
  idade = Number(prompt("Qual sua idade?"))
  email = prompt("Qual seu email?")

  const frase = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`

  console.log(frase)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFavorita1 = prompt('Qual sua cor favorita?')
  const corFavorita2 = prompt('Qual sua segunda cor favorita?')
  const corFavorita3 = prompt('Qual sua terceira cor favorita?')
  const arrayCores = [corFavorita1, corFavorita2, corFavorita3]

  console.log(arrayCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const stringMaiuscula = string.toUpperCase()
  return stringMaiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const qtdIngressosMinimo = custo / valorIngresso
  return qtdIngressosMinimo

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  const mesmoTamanho = string1.length === string2.length
  return mesmoTamanho

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0]
  return primeiroElemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array.reverse()[0]
  return ultimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  array[0] = array.reverse()[0]
  array.reverse()[0] = array[0]
  
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const tudoIgual = (string1.toUpperCase === string2.toUpperCase)
  return tudoIgual

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt('Qual o ano atual?')
  const anoNascimento = prompt('Qual seu ano de nascimento?')
  const anoEmissaoRg = prompt('Em que seu RG foi emitido?')

   const res = (anoAtual - anoNascimento) && (anoAtual - anoEmissaoRg)

  return res

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}