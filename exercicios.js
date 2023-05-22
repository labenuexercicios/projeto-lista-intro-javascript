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
const altura = Number(prompt("Digite numero"))

const largura = Number(prompt("dd"))

console.log(altura * largura) 
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Ano atual"))
  
  const anoDeNascimento = Number(prompt("Ano de nascimento"))

  console.log(anoAtual - anoDeNascimento)

  }


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  return peso/altura**2
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt("Digite seu nome")

  const idade = Number(prompt("Digite sua idade"))

  const email = prompt("Digite seu e-mail")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)




}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  
  const cor = prompt("Digite sua cor favorita")

  const cor2 = prompt("Digite sua cor favorita")

  const cor3 = prompt("Digite sua cor favorita")

  console.log([cor,cor2,cor3]);
  

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

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

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

    return array[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
      
  
  let troca = array[0]

  array[0] = array[array.length-1]

  array[array.length-1] = troca

  return array

  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
   let anoAtual = Number(prompt("Digite o ano atual"))
   const anoDeNascimento = Number(prompt("Digite o seu ano de nascimento"))
   const carteiraIdentidade = Number(prompt("Digite o ano que sua carteira de identidade foi emitida"))

  const calculaIdade = anoAtual - anoDeNascimento
   
  const menorDe20Anos = calculaIdade <= 20 && anoAtual - carteiraIdentidade >= 5 && anoAtual - carteiraIdentidade <= 9

  const pessoasEntre20E50 = calculaIdade > 20 && calculaIdade < 50 &&  anoAtual - carteiraIdentidade >= 10 && anoAtual - carteiraIdentidade <= 14

  const pessoasAcimaDe50 = calculaIdade > 50 && anoAtual - carteiraIdentidade >= 15

  console.log(menorDe20Anos,pessoasEntre20E50,pessoasAcimaDe50)
}
   
  


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aquicon

  const verficaAnoBissexto = ano /100 === 0 && ano %400 === 0 

  return verficaAnoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt("tem mais de 18?")
  const ensinoMedio = prompt("tem ensino médio completo? ")
  const tempoLivre = prompt("tem disponibilidade de horários?")

  const validade = idade === "sim" && ensinoMedio === "sim" && tempoLivre === "sim"

  console.log(validade); 
  
}
