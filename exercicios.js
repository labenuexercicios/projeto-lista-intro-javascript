// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------
// EXERCÍCIO 0A
function soma(num1, num2) {
  let summationNumbers = num1 + num2;
  return summationNumbers;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  const menssage = prompt('Write a message!')
  console.log(menssage)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const heightRectangle= Number(prompt("Write the height of the rectangle"));
  const widthRectangle = Number(prompt("Write the width of the rectangle"));
  const calculateAreaRectangle = heightRectangle * widthRectangle;
  console.log(calculateAreaRectangle);
}


// EXERCÍCIO 02
function imprimeIdade() {
  let yearNow = Number(prompt("What year are you in?"));
  let yearBirthday = Number(prompt("What your year born?"));
  let ageUser = yearNow - yearBirthday;
  console.log(ageUser); 
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  let weightNow = peso;
  let heightNow = altura;
  let calculateIMC = weightNow / (heightNow*heightNow);
  return calculateIMC.toFixed(1)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nameUser = prompt("What is your name?");
  let ageUser = prompt("What is your age?");
  let emailUser = prompt("What is your e-mail?");
  console.log(`Meu nome é ${nameUser}, tenho ${ageUser} anos, e o meu email é ${emailUser}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let colorFavorite1 = prompt("What is your first favorite color?");
  let colorFavorite2 = prompt("What is your secund favorite color?");
  let colorFavorite3 = prompt("What is your third favorite color?");
  let junctionColor = [colorFavorite1, colorFavorite2,colorFavorite3];
  console.log(junctionColor);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(text) {
  let upperCaseText = text.toUpperCase();
  return upperCaseText
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // Sell é vender 
  let sellTicketEspetaculo = custo / valorIngresso;
  return sellTicketEspetaculo; 
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let checkString1 = string1;
  let checkString2 = string2;
  let checkTrueFalse = checkString1.length === checkString2.length;
  return checkTrueFalse;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  let acessArray = array[0];
  return acessArray;
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let acessArray = array.pop();
  return acessArray;
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let numbers = array;
  let copy= numbers[0];
  numbers[0] = numbers[numbers.length-1];
  numbers[numbers.length-1] = copy;
  return numbers
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let textCase1 = string1.toUpperCase();
  let textCase2 = string2.toUpperCase();
  const checkTextTrueFalse = textCase1 === textCase2;
  return checkTextTrueFalse
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  let yearNow = Number(prompt("What year are you in?"));
  let yearBorn = Number(prompt("What your year born?")) ;
  let yearIdCard = Number(prompt("What year was your id card made?"));
  let ageUser = yearNow - yearBorn;
  let verificationYear = yearNow - yearIdCard;
  let verificationIdCard;

  if(ageUser <= 20){
      verificationIdCard = (verificationYear >= 5);
      console.log(verificationIdCard);
  }else if(ageUser > 20 && ageUser <= 50){
      verificationIdCard = (verificationYear >= 10);
      console.log(verificationIdCard);
  }else{
      verificationIdCard = (verificationYear >= 15);
      console.log(verificationIdCard);
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  let anoBi = ano 
  let conta = anoBi%400 === 0 || anoBi%4 === 0 && anoBi%100 !== 0
  return conta
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  let checkAge18 = prompt("Você tem mais de 18 anos? [Ex: sim ou não]");
  let checkSchoool = prompt("Você possui ensino médio completo? [Ex: sim ou não");
  let checkHours = prompt("Você possui disponibilidade exclusiva durante os horários do curso? [Ex: sim ou não]");
  const verificationInscriptionLabenu = (checkAge18 === "sim" && checkSchoool === "sim" && checkHours === "sim");
  console.log(verificationInscriptionLabenu);
}