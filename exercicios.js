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
  const altura = Number(prompt('Qual a altura do retangulo?'))  
  const largura = Number(prompt('Qual a largura do retangulo?  '))
  const resuldo = altura * largura
  console.log(resuldo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoatual = prompt('Em que ano estamos?')
  const anoNasc = prompt('Em que ano você nasceu?')
  const idade = anoatual - anoNasc
  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const peso1 = Number(prompt('Qual seu peso?'))
  const altura2 = Number(prompt('Qual sua altura?'))
  
  
  return peso/(altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(){
  const nome = prompt('Qual seu nome?')
  const idade = (prompt('Qual sua idade?'))
  const email =prompt('Digite seu e-mail:') 
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Primeira cor favorita: ')
  const cor2 = prompt('Segunda cor favorita: ')
  const cor3 = prompt('Terceira cor favorita: ')
  const junta = cor1 + cor2 + cor3
  const separa = junta.split(/(?=[A-Z])/)
  console.log(separa)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const strngMaiuscula = string

return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const quantidadeIngressos = Math.ceil(custo / valorIngresso);

  return quantidadeIngressos;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const stringa = false
  const stringb = true
  return string1.length === string2.length
}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
  
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const meuArray = [1, 2, 3, 4, 5]
  return array[0,4]

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