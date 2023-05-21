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
  const altura = Number(prompt("Informe a altura"))
  const largura = Number(prompt("Informe a largura"))
  const area = altura * largura;
  console.log(area)
}
calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("Qual é o ano atual?"))
const anoNascimento = Number(prompt("Qual o seu ano de nascimento?"))
const idade = anoAtual - anoNascimento
console.log(idade)
}
imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}
calculaIMC()

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual é o seu nome?")
  const idade = Number(prompt("Qual é a sua idade?"))
  const email = prompt("Qual é o seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}
imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual sua primeira cor favorita?")
  const cor2 = prompt("Qual sua segunda cor favorita?")
  const cor3 = prompt("Qual sua terceira cor favorita?")

  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}
calculaIngressosEspetaculo(500,10)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
    
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const novoArray = [...array]
  novoArray[0] = novoArray[novoArray.length-1]
  novoArray[novoArray.length-1] = array[0]
  return novoArray
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Qual é o ano atual?"))
  const anoNascimento = Number(prompt("Qual o ano de seu nascimento?"))
  const anoEmissaoRG = Number(prompt("Qual o ano em que sua carteira de identidade foi emitida?"))
  const idade = anoAtual - anoNascimento 
  const tempoDesdeEmissao = anoAtual - anoEmissaoRG

  const cond1 = idade <= 20 && tempoDesdeEmissao >= 5
  const cond2 = idade > 20 && idade <= 50 && tempoDesdeEmissao >= 10
  const cond3 = idade > 50 && tempoDesdeEmissao >= 15
  
  console.log(cond1 || cond2 || cond3)
} 

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const cond1 = ano % 400 === 0 
  const cond2 = ano % 4 === 0 && ano % 100 !== 0  
  return cond1 || cond2
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Você tem mais de 18 anos?").toLowerCase()
  const escolaridade = prompt("Você possui ensino médio completo").toLowerCase()
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?").toLowerCase()
  const inscricaoValida = [idade, escolaridade, disponibilidade].every((item) => item === "sim")
  
  console.log(inscricaoValida)   
}
