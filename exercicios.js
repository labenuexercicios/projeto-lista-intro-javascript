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

  const altura = prompt (`Qual é a altura`)
  const largura = prompt(`Qual é a largura`)
  const area = altura*largura

  console.log(area)

}
 


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual = prompt ('Qual ano Atual ?')
  const anoNascimento =prompt ('1990')
 const idadeAtual = anoAtual-anoNascimento

 console.log(idadeAtual)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const pesoatual = prompt(`Qual é o peso atual?`)
  const alturaatual = prompt(`Qual é a sua altura?`)

  return pesoatual / (alturaatual * alturaatual)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt('Insira Seu nome de usuario');
  const idade = prompt('Insira Sua Idade');
  const email = prompt('Insira Seu Email Cadastrado');

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  var cores = [];

  var cor1 = prompt ('Qual sual primeira cor predileta?')
  var cor2 = prompt ('Qual sua segunda cor predileta?')
  var cor3 = prompt ('Qual sua terceira cor predileta?')

  cores.push(cor1);
  cores.push(cor2);
  cores.push(cor3);

  console.log(cores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

const istringM = string.toUpperCase()  
  return istringM
 
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo / valorIngresso


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

  return string1.length === string2.length

}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array [0]


}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array [array.length -1]
  
}


// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  const ArrayNova = array.slice()
  const ultimoArray = ArrayNova.pop()
  const inicial= ArrayNova.shift()
  ArrayNova.unshift(ultimoArray)
  ArrayNova.push(inicial)

  return ArrayNova

}



// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toUpperCase() === string2.toUpperCase()

}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual = Number(prompt("Digite o ano atual:"));
  const anoNascimento = Number(prompt("Digite o ano de nascimento:"));
  const anoEmissao = Number(prompt("Digite o ano de emissão da carteira de identidade:"));

  const idade = anoAtual - anoNascimento;
  const anosCarteira = anoAtual - anoEmissao;

  const temRenovarAte20Anos = idade <= 20 && anosCarteira >= 5;
  const temRenovarEntre20e50Anos = idade > 20 && idade <= 50 && anosCarteira >= 10;
  const temRenovarAcima50Anos = idade > 50 && anosCarteira >= 15;
  
  const temRenovar = temRenovarAte20Anos || temRenovarEntre20e50Anos || temRenovarAcima50Anos;

  console.log(temRenovar);



}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui


  const multiploDe400 = ano % 400 === 0;
  const multiploDe4 = ano % 4 === 0;
  const multiploDe100 = ano % 100 === 0;

  return multiploDe400 ? true : multiploDe4 && !multiploDe100;


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui


  const idade = prompt("Você tem mais de 18 anos?") === "sim";
  const ensinoMedio = prompt("Você possui ensino médio completo?") === "sim";
  const Disponivel = prompt("Você possui disponibilidade exclusiva durante os horários do curso?") === "sim";
  
  const validade = idade && ensinoMedio && Disponivel;
  
  console.log(validade);



}