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
  let lado1 = prompt("Digite um valor para a base")
  let lado2 = prompt("Digite um valor para a altura")
  let area = lado1*lado2
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoatual = prompt("Qual é o ano atual?")
  let anonascimento = prompt("Qual o ano do seu nascimento?")
  let idade = anoatual - anonascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let imc = (peso / (altura*altura))
    return imc 
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual seu nome?")
  const idade = prompt("Qual sua idade?")
  const email = prompt("Qual seu email?")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual a sua primeira cor favorita?")
  const cor2 = prompt("Qual a sua segunda cor favorita?")
  const cor3 = prompt("Qual a sua terceira cor favorita?")
  cores = [cor1, cor2, cor3]
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const fraseMaiuscula = string.toUpperCase()
  return fraseMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let lucro = custo / valorIngresso
  return lucro
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanho1 = string1.length
  const tamanho2 = string2.length
  const tamanhos = tamanho1 === tamanho2
return tamanhos
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const primeiroElemento = array[0];
  return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const Tarray = array.length
  const ultimoElemento = array[Tarray - 1] 
  return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroNumero = array[0]
  const ultimoNumero = array[array.length-1]
  array[0] = ultimoNumero
  array[array.length-1] = primeiroNumero
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const maiuscula1 = string1.toUpperCase()
  const maiuscula2 = string2.toUpperCase()
  const igualdade = (maiuscula1 === maiuscula2)
  return igualdade
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number( prompt("Qual o ano atual?") )
  let anoNascimento = Number( prompt("Qual é o ano do seu nascimento") )
  let anoEmissao = Number( prompt("Qual ano sua identidade foi emitida?") )
  let idade = Number( anoAtual - anoNascimento)
  const renovacao1 = ( ( idade <= 20 ) && (anoAtual - anoEmissao >= 5) )
  const renovacao2 = ( ( idade > 20 && idade <= 50 ) &&  (anoAtual - anoEmissao >= 10 ) ) 
  const renovacao3 = ( ( idade > 50 ) && ( anoAtual - anoEmissao >= 15 ) )
  console.log(renovacao1 || renovacao2 || renovacao3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
    let bissexto400 = ano % 400 === 0
    let bissexto4 = ano % 4 === 0 
    let bissexto100 = ano % 100 === 0 
    return (bissexto400 || (bissexto4 && !bissexto100))
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maior = prompt("Você é maior de idade? sim/não")
  const ensinoMedio = prompt("Você possui ensino medio completo? sim/não")
  const horario = prompt("Você tem disponibilidade para a carga horária do curso? sim/não")
  console.log(maior === "sim" && ensinoMedio === "sim" && horario ==="sim")
}