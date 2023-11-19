// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma (num1, num2) {
     // implemente sua lógica aqui
     
     return num1 + num2
}

// EXERCÍCIO 0B       
function imprimeMensagem() {
//implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')
  
  console.log(mensagem)
}


// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let altura = Number (prompt ('Digite a altura do retagulo'))
let largura = Number (prompt ('Digite a largura do retagulo'))
const calculoRetangulo = altura * largura
console.log (calculoRetangulo)
}
calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number (prompt ('Digite o ano em que estamos'))
  let anoDeNascimento = Number (prompt ('Digite o ano do seu nascimento'))
  const calculoIdade = anoAtual - anoDeNascimento
  console.log (calculoIdade)
}
imprimeIdade()



// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const resultadoImc = peso / (altura * altura)
  return resultadoImc

  }


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nome =  prompt('Qual o seu nome?')
  const idade = Number (prompt('Qual a sua idade?'))
  const email = prompt('Insira seu e-mail!')
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
const mensagem = (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

console.log (mensagem)
}



// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt ('Me diga sua 1ª cor favorita')
  const cor2 = prompt ('Me diga sua 2ª cor favorita')
  const cor3 = prompt ('Me diga sua 3ª cor favorita')
   console.log ([cor1, cor2, cor3]) 
  
}



// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let frase = string
  const fraseUpper = frase.toUpperCase()
  return fraseUpper

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const numeroDeIngressos = custo/valorIngresso
  return numeroDeIngressos

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanhoString1 = string1.lenght;
  const tamanhoString2 = string2.lenght;
  const comparacao = tamanhoString1 === tamanhoString2
  return comparacao
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
let primeiroElemento = array
return (primeiroElemento[0])

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array
  return (ultimoElemento.pop())
  
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
 
  let primeiro = array[array.lenght] 
  let ultimo = array[0]
  array.pop()
  array.shift()
  array.unshift(primeiro)
  array.push(ultimo)

  return array
  
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
 let anoAtual = Number (prompt('Qual o ano atual?'))
 const anoNascimento = Number(prompt('Qual o seu ano de nascimento?'))
 const emissaoRg = Number(prompt('Qual o ano de emissão do seu RG?'))
 let idade = anoAtual - anoNascimento
 let tempoRg = anoAtual - emissaoRg
 let condicao1 =(anoAtual - anoNascimento <= 20 && anoAtual - emissaoRg >=5)
 let condicao2 = (anoAtual- anoNascimento > 20 && anoAtual - anoNascimento <= 50 && anoAtual - emissaoRg >=10)
 let condicao3 = (anoAtual - anoNascimento > 50 && anoAtual - emissaoRg > 15)
 const condicaoGeral = condicao1 || condicao2 || condicao3 
 console.log(condicaoGeral) 

}



// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
/*const divisivelPor10 =
const divisivelPor500 =
const divisivelPor700 = 
*/
// 
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
 maiorIdade = confirm ('Você tem mais de 18 anos? OK para sim e CANCELAR para não')
 ensinoMedio = confirm ('Você possui o ensino médio completo? OK para sim e CANCELAR para não')
 disponibilidadeDeHorario = confirm ('Você possui disponibilidade exclusiva durante os horários do curso?OK para sim e CANCELAR para não')
 const resultado = maiorIdade && ensinoMedio && disponibilidadeDeHorario
 console.log (resultado)
}

