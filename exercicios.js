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
  const altura = Number(prompt(`Digite sua altura`))
  const largura = Number(prompt(`Digite sua altura`))
  const area = altura * largura

  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt(`Digite o ano em que estamos`))
  const anoDeNascimento = Number(prompt(`Digite o seu ano de nascimento`))
  const idade = anoAtual - anoDeNascimento

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // let peso = 85
  // let altura = 1.8 
  let IMC = peso / ( altura * altura)

  return IMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt(`Digite seu nome`)
  let idade = Number(prompt(`Digite sua idade`))
  let email = prompt(`Digite seu e-mail`)

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 =  prompt("Qual sua cor predileta?")
  let cor2 =  prompt("Qual sua cor predileta?")
  let cor3 =  prompt("Qual sua cor predileta?")

  const cor = [cor1, cor2, cor3]
  
  console.log (cor)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {

  return string.toUpperCase()
  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let paraLucrar = (custo / valorIngresso)

  return paraLucrar

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
  return array[array.length -1]


}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let num1 = array[0]
  let num2 = array[array.length -1]

  array[0] = num2
  array[array.length -1] = num1

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
 
  return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = Number(prompt("Em que ano estamos?"))
  let anoDeNascimento = Number(prompt("Qual seu ano de nascimento"))
  let emissaoRg = Number(prompt("Quando seu Rg foi emitido"))
  let idade = anoAtual - anoDeNascimento
  let tempoRg = anoAtual - emissaoRg

  // if (idade <= 20) {
  //   if (tempoRg >= 5) {
  //     console.log(true);
  //   } else {
  //     console.log(false);
  //   }
  // } else if (idade <= 50) {
  //   if (tempoRg >= 10) {
  //     console.log(true);
  //   } else {
  //     console.log(false);
  //   }
  // } else if (idade > 50){
  //   if (tempoRg >= 15){
  //     console.log(true)
  //   } else {
  //     console.log(false)
  //   }
  // }


  //outra forma de fazer

  let num1 = idade <= 20 && tempoRg >= 5
  let num2 = idade <= 50 && tempoRg >= 10
  let num3 = idade > 50 && tempoRg >= 15

  console.log ( num1 || num2 || num3 )

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

  if (ano % 400 === 0) {
    return true;
  } else if (ano % 100 === 0) {
    return false;
  } else if (ano % 4 === 0) {
    return true;
  } else {
    return false;
  }

}
console.log(checaAnoBissexto(1997))

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}