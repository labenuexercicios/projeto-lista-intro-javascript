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
  const altura = Number(prompt(`Insira o valor da altura do seu retângulo:`))
  const largura = Number(prompt(`Insira o valor da largura do seu retângulo:`))
  const area = (altura * largura)
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt(`Qual o ano atual?`))
const anoDeNascimento = Number(prompt(`Qual o ano em que você nasceu?`))
const idade = Number(anoAtual - anoDeNascimento)
console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

return (peso/(altura*altura))

calculaIMC()

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const nome = prompt(`Qual o seu nome?`)
const idade = prompt(`Quantos anos você têm?`)
const email = prompt(`Digite o seu email:`)

console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt(`Qual sua cor favorita?`)
const cor2 = prompt(`Qual sua segunda cor favorita?`)
const cor3 = prompt(`Qual sua terceira cor favorita?`)
const arrayCores = [cor1,cor2,cor3]

console.log(arrayCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return (string.toUpperCase())

retornaStringEmMaiuscula()


}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return (custo/valorIngresso)

calculaIngressosEspetaculo()
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return (string1.length === string2.length)
checaStringsMesmoTamanho()

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return (array[0])
retornaPrimeiroElemento()

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
console.log(array.length - 1)

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