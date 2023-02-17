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
  const altura = prompt("Digite uma altura")
  const largura = prompt("Digite uma largura")
  console.log(altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("Qual o ano atual?")
  const anoDeNascimento = prompt("Qual seu ano de nascimento?")
  console.log(anoAtual - anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome?")
  const idade = prompt("Qual sua idade?")
  const email = prompt("Qual o seu e-mail?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const corFavorita1 = prompt("Qual sua primeira cor favorita?")
  const corFavorita2 = prompt("Qual sua segunda cor favorita?")
  const corFavorita3 = prompt("Qual sua terceira cor favorita?")
  console.log([corFavorita1, corFavorita2, corFavorita3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0] 
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const arrayCopia = array.slice()
  const ultimoElemento = arrayCopia.pop()
  const primeiroElemento = arrayCopia.shift()
  arrayCopia.unshift(ultimoElemento)
  arrayCopia.push(primeiroElemento)
  return arrayCopia
}
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase() === string2.toUpperCase()
}
// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Qual o ano atual?"))
  const anoDeNascimento = Number(prompt("Qual seu ano de nascimento?"))
  const anoCarteiraDeIdentidade = Number(prompt("Em que ano sua carteira de identidade foi emitida?"))
  const idade = anoAtual - anoDeNascimento
  const vinteAnos = (idade <= 20) && (anoCarteiraDeIdentidade + 5) <= anoAtual
  const vinteCinquentaAnos = (idade > 20 && idade <=50) && (anoCarteiraDeIdentidade + 10) <= anoAtual
  const acimaCinquenta = idade > 50 && (anoCarteiraDeIdentidade + 15) < anoAtual
  console.log(vinteAnos || vinteCinquentaAnos || acimaCinquenta)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const multiploDe400 = (ano % 400 === 0)
  const multiploDe4 = (ano % 4 === 0)
  const multiploDe100 = (ano % 100 === 0)
  return multiploDe400 || (multiploDe4 && !multiploDe100)
}
// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Você tem mais de 18 anos?")
  const ensinoMedioCompleto = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")
  const idadeValida = idade === "sim"
  const ensinoMedioValido = ensinoMedioCompleto === "sim"
  const disponibilidadeValida = disponibilidade === "sim"
  const incricaoValida = idadeValida && ensinoMedioValido && disponibilidadeValida
  console.log(incricaoValida)
}