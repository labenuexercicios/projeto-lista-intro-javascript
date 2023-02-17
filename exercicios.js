/// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

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
  const altura = prompt('Digite a altura')
  const largura = prompt('Digite a altura')
  console.log(altura * largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Ano atual'))
  const anoDeNascimento = Number(prompt('Ano de nascimento'))
  console.log(anoAtual - anoDeNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Nome')
  const idade = Number(prompt('Idade'))
  const email = prompt('Email')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Qual sua primeira cor favorita?')
  const cor2 = prompt('Qual sua segunda cor favorita?')
  const cor3 = prompt('Qual sua terceira cor favorita')
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
  const ingressos = custo / valorIngresso
  return ingressos
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
  return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const array1 = array.slice()
  const indice = array1[array1.length-1]
  array.pop();
  array.shift();
  array.push(array1[0]);
  array.unshift(indice);
  
  return array
 
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const mais1 = string1.toUpperCase()
  const mais2 = string2.toUpperCase()
  const mais3 = mais1 === mais2
  return mais3
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Ano atual:'))
  const anoDeNascimento = Number(prompt('Ano de nascimento:'))
  const anoCNHEmissao = Number(prompt('Ano de emissão da CNH:'))
  const idade = anoAtual - anoDeNascimento
  const idadeEmissaoCNH = anoAtual - anoCNHEmissao
  const anos20 = idade <= 20 && idadeEmissaoCNH >= 5
  const anos20A50 = idade >20 && idade <= 50 && idadeEmissaoCNH >= 10
  const anos50Acima = idade >50 && idadeEmissaoCNH >= 15
  const todos = anos20 || anos20A50 || anos50Acima
  console.log(todos)
  

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  
  return (ano % 400 === 0 || ano % 4 === 0 && ano % 100 !== 0)


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  
  const anos = prompt('Você tem mais de 18 anos?') 
  const medio = prompt('Você possui ensino médio completo?') 
  const horario = prompt('Você possui disponibilidade exclusiva durante os horários do curso?') 
  
  
  
  console.log(anos === 'sim' && medio === 'sim' && horario === 'sim')
}