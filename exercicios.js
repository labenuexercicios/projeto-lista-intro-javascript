// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui

  return num1 + num2
}
soma(4, 5)
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
  let altura01 = Number(prompt('digite a altura'))
  let largura01 = Number(prompt('digite a largura'))
  let areaRetangulo = altura01 * largura01
  console.log(areaRetangulo);
}

// EXERCÍCIO 02

function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = +(prompt('digite o ano atual'))
  const anoNasc = +(prompt('digite o ano do seu nascimento'))
  const idade = anoAtual - anoNasc
  console.log(idade);
}

// EXERCÍCIO 03

function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  //let peso = Number(prompt('digite seu peso'))
  //let altura = Number(prompt('digite sua altura'))
  let imc = peso / (altura * altura)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt('Digite seu nome')
  let idade = prompt('Digite sua idade')
  let email = prompt('Digite seu email')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let coresInformada = []
  let cor1 = prompt('Informe sua primera cor favorita')
  let cor2 = prompt('Informe sua segunda cor favorita')
  let cor3 = prompt('Informe sua terceira cor favorita')  
   coresInformada.push(cor1)
   coresInformada.push(cor2)
   coresInformada.push(cor3)
   console.log(coresInformada);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  //implemente sua lógica aqui
  let nomeMaiusculo = string

  return nomeMaiusculo.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let calculTotal = custo / valorIngresso
  return calculTotal
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
   //let compara = (string1.lenght > string2.lenght) 
   //|| string1.lenght < string2.lenght ) 
   let compare  =  (string1.length == string2.length) || (string1.length > string2.length)
   return compare
  
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui  
  
  return array[0];
}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  
  return array.pop();
   

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  array.pop 
  array.uns     
  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
   
   //(string1.localeCompare == string2.localeCompare) || !(string1.localeCompare == string2.localeCompare)
   let compare2  =  (string1.toUpperCase() === string2.toUpperCase())
   //|| (string1.length > string2.length)
   return compare2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  // let anoAtual = prompt('Informe o ano atual')
  // let anoNasc = prompt('Informe o ano do seu nascimento')
  // let anoEmiss = prompt('Informe da emissao da carteira')
  // let renovaCarteira = (anoAtual - anoNasc) <= 20
  // // if ((anoAtual - anoNasc) <= 20){ console.log(true);}
  // // else if (((anoAtual - anoNasc) > 20) && ((anoAtual - anoNasc) <= 50)){
  // //   console.log(true);
  // // }
  anoAtual = Number(prompt('Informe o ano atual'))
  anoNascimento = Number(prompt('Informe sua data de nascimento'))
  emissaoCarteira = Number(prompt('Informe o ano da data de emissao da sua CNH'))
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
 
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui  
  let respIdade = prompt("Você tem mais de 18 anos? (sim ou nao)").toLowerCase();
  let respEnsinoMedio = prompt("Você possui ensino médio completo? (sim ou nao)").toLowerCase();
  let respDisponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? (sim ou nao)").toLowerCase();
  

  let validacao = respIdade === "sim" && respEnsinoMedio === "sim" && respDisponibilidade === "sim";
  console.log(validacao);
}
