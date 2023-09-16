// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------
/* * Escrevam o código dentro da função correspondente ao número do exercício, no arquivo exercicios.js
* Existem dois tipos de exercícios:
  1. Em alguns, você deve pedir dados ao usuário. Para isso, você deve usar a função prompt(). Nesses casos, você deve imprimir a resposta no console, usando o console.log().
  2. Em outros, os dados são passados como argumentos da função. Nesses casos, você deve usar o return para retornar a resposta. */
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
     const altura = prompt("Digite a altura do retangulo")
     const largura = prompt("Digite a largura do retangulo")
    
     const calcularArea = altura * largura

     console.log(calcularArea)
     
}

// EXERCÍCIO 02
function imprimeIdade() {
    const anoAtual = prompt("Ano atual")
    const anoNasc = prompt("Qual o seu ano de nascimento?")
    
    const calcularIdade = anoAtual - anoNasc
    
    console.log(calcularIdade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
    return (peso / (altura * altura))

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual seu nome")
  const idade = prompt("Quantos anos você tem?")
  const email = prompt("Digite seu e-mail")


  
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
    let array = []
    array.push(prompt("Fala uma cor"), prompt ("Fala outra"), prompt ("A terceira agora"))

/*     const array = [cor1, cor2, cor3]
 */    
    console.log(array)
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

    return string1.length == string2.length

}



// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
    return array [0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
   /*  console.log(array.slice(-1))
    console.log(array[array.length -1])
    console.log(array) */
    return array.pop()  
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
    /* return array.splice(0,-1) */
    
  }

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui return string1.length == string2.length

  /* return string1.localeCompare(string2, undefined, { sensitivity: 'accent' }) */
  /* return string1.localeCompare(string2) */

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