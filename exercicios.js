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
function calculaAreaRetangulo(altura,largura) {
  // implemente sua lógica aqui
    altura = prompt('Qual a altura? ')
    largura = prompt('Qual a largura? ')
    const resultado = altura * largura
    console.log(resultado)
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual,anoNascimento) {
  // implemente sua lógica aqui
  anoAtual = prompt('Em que ano você está?')
  anoNascimento = prompt('Qual o ano que você nasceu? ')
  const idade = anoAtual - anoNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const calc = altura * altura
  const calcResultado = peso / calc
  return calcResultado
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome,idade,email){
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt('Qual é o seu nome?')
  idade = Number(prompt('Qual é a sua idade? '))
  email = prompt('Qual é o seu email? ')
  const frase = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}`
  console.log(frase)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(corFav1,corFav2,corFav3) {
  // implemente sua lógica aqui
  corFav1 = prompt('Diga sua cor favorita 1/1 ?')
  corFav2 = prompt('Diga sua cor favorita 1/2 ?')
  corFav3 = prompt('Diga sua cor favorita 1/3 ?')
  const cores = [corFav1,corFav2,corFav3]
  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string = prompt('Digite sua mensagem')
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  custo = prompt('Qual o valor total dos ingressos? ')
  valorIngresso = prompt('Qual é o valor do ingresso unitário? ')
  const vendaIngresso = custo / valorIngresso
  return vendaIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  string1 = prompt('Primeira string')
  string2 = prompt('Segunda string')
  const contagem1 = string1.length
  const contagem2 = string2.length
  const resultadoContagem = Boolean(contagem1 === contagem2)
  return resultadoContagem
}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  array = prompt('digite')
  const adicionando = array.split(",")
  return adicionando[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  array = prompt('digite')
  const adicionando = array.split(",")
  return adicionando.reverse()[0]
}

// // EXERCÍCIO 11 NÃO CONSEGUI FAZER
// function trocaPrimeiroEUltimo(array) {
//   // implemente sua lógica aqui
//   array = prompt('digite')
//   const adicionando = array.split(",")
//   return adicionando.reverse()[0]
// }

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = prompt('digite uma palavra').toLowerCase()
  string2 = prompt('digite outra palavra').toLowerCase()
  let resposta = Boolean(string1 === string2) 
  return resposta
}

// EXERCÍCIO 13
function checaRenovacaoRG(anoAtual, anoNascimento,emissaoCarteira) {
  // implemente sua lógica aqui
  anoAtual = Number(prompt('Em que ano você está? '))
  anoNascimento = Number(prompt('Em que ano você nasceu? '))
  emissaoCarteira = Number(prompt('Em que ano a sua identidade foi emitida? '))

  idade = anoAtual - anoNascimento
  validade = anoAtual - emissaoCarteira

  if(idade <= 20 && validade >= 5){
    console.log(true)
  }else if(idade >=20 && idade <= 50 && validade >= 10){
    console.log(true)
  }else if(idade >50 && validade >= 15){
    console.log(true)
  }
  else {
    console.log(false)
  }

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  ano = Number(prompt('Ano bissexto'))

  if(ano % 4 === 0){
    if(ano % 400 === 0){
      console.log(true)
    }
    else if(ano % 100 !== 0){
      console.log(true)
  }
  else {
    console.log(false)
  }
    
}else{
  console.log(false)
}
}


// EXERCÍCIO 15
function checaValidadeInscricaoLabenu(idade,ensinoMedio,disponibilidade) {
  // implemente sua lógica aqui
  idade = prompt('Você tem mais de 18 anos?')
  ensinoMedio = prompt('Você possui ensino médio completo? ')
  disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso? ')

  if(idade =="sim" && ensinoMedio == "sim" && disponibilidade == "sim"){
    console.log(true)
  }else{
    console.log(false)
  }

}
