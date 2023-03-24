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
  const alturaDoRetangulo = Num(prompt("Digite a altura do retângulo:"));
  const larguraRetangulo = Num(prompt("Digite a largura do retângulo:"));
  const areaTotal = alturaDoRetangulo*larguraRetangulo;

	console.log(areaTotal);
}



// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = parseInt(prompt("Digite o ano atual:"));
  const anoNascimento = parseInt(prompt("Digite o seu ano de nascimento:"));
  const idade = anoAtual - anoNascimento;

  console.log(idade);
}



// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  const imc = peso / (altura * altura);
  return imc;

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Digite seu nome:");
  const idade = prompt("Digite sua idade:");
  const email = prompt("Digite seu email:");

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual a sua primeira cor favorita?");
  const cor2 = prompt("Qual a sua segunda cor favorita?");
  const cor3 = prompt("Qual a sua terceira cor favorita?");
  const coresFavoritas = [cor1, cor2, cor3];
  console.log(coresFavoritas);
}

imprimeTresCoresFavoritas();

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {

  const stringMaiusc = string.toUpperCase()

  return stringMaiusc
}
  
 
  

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui


return custo / valorIngresso
  
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

  return string1.length == string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0];


}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length - 1];


}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiroElemento = array[0];
  let ultimoElemento = array[array.length - 1];
  array[0] = ultimoElemento;
  array[array.length - 1] = primeiroElemento;
  return array;



}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toLowerCase() === string2.toLowerCase();

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

    const anoAtual = Number(prompt("Digite o ano atual:"));
    const anoNascimento = Number(prompt("Digite o ano de nascimento:"));
    const anoEmissao = Number(prompt("Digite o ano de emissão da carteira de identidade:"));

    const anosCarteira = anoAtual - anoEmissao;
    const idade = anoAtual - anoNascimento;
 
    const precisaRenovarAcima50Anos = idade > 50 && anosCarteira >= 15;
    const precisaRenovarAte20Anos = idade <= 20 && anosCarteira >= 5;
    const precisaRenovarEntre20e50Anos = idade > 20 && idade <= 50 && anosCarteira >= 10;
    
  
    const precisaRenovar = precisaRenovarAte20Anos || precisaRenovarEntre20e50Anos || precisaRenovarAcima50Anos;
  
    console.log(precisaRenovar);
  }
// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
    
  let multiplo400 = ano % 400 === 0;
  let multiplo4 = ano % 4 === 0;
  let multiplo100 = ano % 100 === 0;
  
  return multiplo400 || (multiplo4 && !multiplo100);
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const validade = idade && ensinoMedio && disponibilidade;
  const ensinoMedio = prompt("Você possui ensino medio completo?") === "sim";
  const disponibilidade = prompt("Você possui disponibilidade durante os horários do curso?") === "sim";
  const idade = prompt("Você tem mais de 18 anos?") === "sim";
  
  
  console.log(validade);
}