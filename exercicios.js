// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}
const numero1 = 2
const numero2 = 10
const resultadoSoma = soma(numero1,numero2)
console.log(resultadoSoma)
// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura,largura) {
  altura = Number (prompt('Digite a altura do seu retangulo:'))
  largura = Number (prompt('Digite a largura do seu retangulo:'))
  const calculaAreaRetangulo = largura * altura
  console.log(calculaAreaRetangulo)
 

}

// EXERCÍCIO 02
function imprimeIdade(anoAtual,anoDeNascimento) {
  anoAtual = Number(prompt("Qual o ano atual?"))
  anoDeNascimento = Number(prompt("Qual o seu ano de nascimento?"))
  
const idade = anoAtual - anoDeNascimento
console.log(`Sua idade é ${idade} anos.`)

}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Qual o seu nome?')
  const idade = prompt ('Qual a sua idade?')
  const email = `Meu nome é ${nome}, tenho ${idade} anos, e o meu e-mail é ${email}`;

}
// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Digite sua primeira cor favorita: ')
 const cor2 = prompt('Digite sua segunda cor favorita: ') 
 const cor3 = prompt(' Digite sua terceira cor favorita: ')
 const tresCoresFavoritas = [cor1,cor2,cor3]
 console.log (tresCoresFavoritas);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringMaiuscula = string.toUpperCase()
  return stringMaiuscula;

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const ingressosVendidos= custo/valorIngresso
  return ingressosVendidos

}


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length;

}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array [0];
}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array [array.length-1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiro = array[0];
  const ultimo = array[array.length - 1];

  array[0] = ultimo;
  array[array.length - 1] = primeiro;

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const lowerString1 = string1.toLowerCase();
  const lowerString2 = string2.toLowerCase();

 
  return lowerString1 === lowerString2;

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let anoAtual = Number(prompt("Qual o ano atual?"));
  let anoDeNascimento = Number(prompt("Qual o seu ano de nascimento?"));
  let anoEmissaoRG = Number(prompt("Qual o ano de emissão da sua carteira de identidade?"));

  let idade = anoAtual - anoDeNascimento;
  let intervaloRenovacao = (idade <=20 || idade === 20) && 5 || (idade<=50 || idade === 50) && 10 || 15;
  let tempoDesdeEmissaoRG = anoAtual - anoEmissaoRG;

  let precisaRenovar = tempoDesdeEmissaoRG >= intervaloRenovacao;

  console.log(precisaRenovar);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
 
  return ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0);

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const respostaIdade = prompt("Você tem mais de 18 anos? (sim ou nao)").toLowerCase();
  const respostaEnsinoMedio = prompt("Você possui ensino médio completo? (sim ou nao)").toLowerCase();
  const respostaDisponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? (sim ou nao)").toLowerCase();

  const inscricaoValida = respostaIdade === "sim" && respostaEnsinoMedio === "sim" && respostaDisponibilidade === "sim";

  console.log(inscricaoValida);

}
