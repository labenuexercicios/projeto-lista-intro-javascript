// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {

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
  const heightString = prompt('Qual a altura do triangulo?');
  const height = parseInt(heightString);
  const widthString = prompt('Qual a largura do triangulo?');
  const width = parseInt(widthString);
  const area = height * width;
  return console.log(area);
}


// EXERCÍCIO 02
function imprimeIdade() {
  const currentYear = prompt('Em que ano estamos?');
  const yearBirth = prompt('Em que ano você nasceu?');
  const age = currentYear - yearBirth;
  console.log(age);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  imc = peso / (altura * altura);
  return imc;

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Qual o seu nome?');
  const idade = prompt('Qual a sua idade?');
  const email = prompt('Qual o seu email?');
  return console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const color1 = prompt('Qual é a sua primeira cor favorita?');
  const color2 = prompt('Qual é a sua segunda cor favorita?');
  const color3 = prompt('Qual é a sua terceira cor favorita?');
  const favoriteColors = [color1, color2, color3];
  console.log(favoriteColors);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {

  const stringUpperCase = string.toUpperCase();
  return stringUpperCase;

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {

const howManyNeed = custo / valorIngresso;
return howManyNeed;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

  countString1 = string1.length;
  countString2 = string2.length;
  const checkString = countString1 === countString2;
  return checkString;


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

  return array[0];

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length -1];

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let first = array[0];
  let last = array[array.length - 1];
  array[0] = last;
  array[array.length - 1] = first;
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const isEqual = string1.toLowerCase() === string2.toLowerCase();
  return isEqual;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const currentYear = prompt('Em que ano estamos?');
  const birthYerar = prompt('Em que ano você nasceu?');
  const issuedIdentity = prompt('Em que ano sua carteira de identidade foi emitida?');
  const age = currentYear - birthYerar
  const issueTime = currentYear - issuedIdentity
  const checkConditions = (age <= 20 && issueTime % 5 === 0) || (age >= 50 && issueTime >= 15) || (age > 20 && age < 50 && issueTime >= 10);

  console.log(checkConditions);
}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
 const isLeapYear = (ano % 400 === 0 || ano % 100 !== 0) && (ano % 4 === 0);
 return isLeapYear;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const isLegalAge = prompt('Você tem mais de 18 anos? (sim/não)');
  const isLegalAgeBoolean = isLegalAge.toLowerCase() === 'sim';
  const completeHighSchool = prompt('tem ensino médio completo? (sim/não)');
  const completeHighSchoolBoolean = completeHighSchool.toLowerCase() === 'sim';
  const haveAvailableTime = prompt('tem tempo disponível? (sim/não)');
  const haveAvailableTimeBoolean = haveAvailableTime.toLowerCase() === 'sim';
  return console.log(isLegalAgeBoolean && completeHighSchoolBoolean && haveAvailableTimeBoolean);

}