// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
 const resultadoSoma = Number(num1 + num2)
  return resultadoSoma
}
 soma(4,8)


// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}
imprimeMensagem('ola')
// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
const perguntarAltura = prompt('insira a altura: ')
const perguntarLargura = prompt('insira a altura: ')
const mostrarArea = perguntarAltura * perguntarLargura
console.log(mostrarArea)
}
calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade() {
const perguntarAnoAtual = Number(prompt('informe em que ano estamos: '))
const perguntarAnoNascimento = Number(prompt('informe seu ano de nascimento: '))
const calcularIdade = perguntarAnoAtual - perguntarAnoNascimento
console.log(calcularIdade)

}
imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura**2)
return imc
}

calculaIMC(67,1.60)


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const perguntarNome = prompt('Qual o seu nome?')
  const perguntarIdade = prompt('Qual a sua idade?')
  const perguntarEmail = prompt('Insira seu email? ')
  const frase = (`Meu nome é ${perguntarNome}, tenho ${perguntarIdade} anos, e o meu email é ${perguntarEmail}.`)
console.log(frase)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const corFavoritaUm = prompt('diga sua primeira cor favortia: ')
  const corFavoritaDois = prompt('diga sua segunda cor favorita: ')
  const corFavoritaTres = prompt('diga sua terceira cor favorita: ')
console.log([corFavoritaUm,corFavoritaDois,corFavoritaTres])
 
}
imprimeTresCoresFavoritas()

// EXERCÍCIO 06

function retornaStringEmMaiuscula(string) {
return string.toUpperCase()
}
retornaStringEmMaiuscula('oi')

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
const vendaIngressos = custo / valorIngresso
return vendaIngressos
}
calculaIngressosEspetaculo(3000,100)

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
return (string1.length >= string2.length)
}
checaStringsMesmoTamanho('abc','abcd')

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
 return (array[0])

}
retornaPrimeiroElemento(1,2,3)
// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length-1]
}

retornaUltimoElemento('teste','porta','batata','mamao')

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
[array[0], array[array.length-1]] = [array[array.length-1], array[0]]
return array
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return (string1.toUpperCase() === string2.toUpperCase())

}
checaIgualdadeDesconsiderandoCase('olA','Ola')

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = prompt('qual o ano atual?')
  const anoNascimento = prompt('qual o seu ano de nascimento? ')
  const anoCarteiraIdentidade = prompt('qual o ano de emissão da sua carteira de identidade? ')
  const idade = anoAtual - anoNascimento
  const renovarRg = anoAtual - anoCarteiraIdentidade
 
  const precisaRenovar = (idade <= 20 && renovarRg >= 5) || (idade > 20 && idade <= 50 && renovarRg >= 10) || (idade > 50 && renovarRg >= 15)
console.log(precisaRenovar)
}
checaRenovacaoRG()

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

 const divisivelPor4 = ano % 4 === 0
 const divisivelPor10 = ano % 100 === 0
 const divisivelPor400 = ano % 400 === 0
 const frase =  divisivelPor4 && (!divisivelPor10 || divisivelPor400)
return frase
}
checaAnoBissexto()

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
 const maiorIdade = prompt('Você tem mais de 18 anos? ')
 const ensinoMedio = prompt('Você possui ensino médio completo? ')
 const disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')
 
 const temSimNosRequisitos = maiorIdade.toLowerCase() === "sim" && ensinoMedio.toLowerCase() === "sim" && disponibilidade.toLowerCase() === "sim"

 console.log(temSimNosRequisitos)
}
