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
  const altura = Number(prompt('Qual é a altura?'))
  const largura = Number(prompt('Qual é a largura?'))
  const area = largura * altura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt('Qual ano atual?'))
  const anoNascimento = Number(prompt('Qual ano você nasceu?'))
  const idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = (peso / altura) ** 2
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Digite seu nome')
  const idade = prompt('Digite sua idade')
  const email = prompt('Digite seu email')
  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  )
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const coresFavoritas = [prompt(`Digite sua primeira cor favorita:`)]
  coresFavoritas.push(prompt(`Digite sua segunda cor favorita:`))
  coresFavoritas.push(prompt(`Digite sua terceira cor favorita:`))

  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringEmMaiuscula = string.toUpperCase()
  return stringEmMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const calculo = custo / valorIngresso
  return calculo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const verTamanho = string1.length === string2.length
  return verTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElemento = array[0]
  return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const tamanhoArray = array.length
  const ultimoElemento = array[tamanhoArray - 1]
  return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
 const novaArray = array.slice() //cria uma copia do original
 const ultimoElemento = novaArray.pop() //remove o ultimo elemento
 const primeiroElemento = novaArray.shift() //remove o primeiro elemento
novaArray.unshift(ultimoElemento) //Põe o ultimo elemento no lugar do primeiro
novaArray.push(primeiroElemento)//Põe o primeiro elemento no lugar do ultimo
return novaArray
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const comparaIgualdade = string1.toUpperCase() === string2.toUpperCase()

  return comparaIgualdade
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Digite o ano atual:"));
  const anoNasc = Number(prompt("Digite o ano de nascimento:"));
  const anoEmissao = Number(prompt("Digite o ano de emissão da carteira de identidade:"));

  const idade = anoAtual - anoNasc
  const anosCarteira = anoAtual - anoEmissao

  const RenovarAte20Anos = idade <= 20 && anosCarteira >= 5;
  const RenovarEntre20e50Anos = idade > 20 && idade <= 50 && anosCarteira >= 10;
  const RenovarAcima50Anos = idade > 50 && anosCarteira >= 15;

  const precisaRenovar = RenovarAte20Anos || RenovarEntre20e50Anos || RenovarAcima50Anos;

  console.log(precisaRenovar)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const multiplo400 = ano % 400 === 0// implemente sua lógica aqui
  const multiplo4 = ano % 4 === 0
  const multiplo100 = ano % 100 === 0

  return multiplo400 ? true : multiplo4 && !multiplo100
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  function checaValidadeInscricaoLabenu() {
    const idade = prompt("Você tem mais de 18 anos?") === "sim";
    const ensinoMedio = prompt("Você possui ensino médio completo?") === "sim";
    const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?") === "sim";
    
    const validade = idade && ensinoMedio && disponibilidade;
    
    console.log(validade)
}
