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
  const largura = prompt("Insira a largura: ");
  const altura = prompt(`Insira a altura: `);
  const areaRetangulo = largura * altura;
  console.log(areaRetangulo);

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = prompt("Em que ano estamos?");
const anoNascimento = prompt(`Qual seu ano de nascimento?`);
const idade = anoAtual - anoNascimento;

console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const imc = peso / (altura*altura);
return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt(`Insira seu nome: `)
  const idade = prompt(`Insira a sua idade: `)
  const email = prompt(`Insira seu e-mail: `)

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("Insira a primeira cor: ")
const cor2 = prompt("Insira a segunda cor: ")
const cor3 = prompt("Insira a terceira cor: ")
corArray = [cor1, cor2, cor3]
console.log(corArray)


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const stringMaiuscula = string.toUpperCase();
  return stringMaiuscula;

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const lucro = custo / valorIngresso;
  return lucro;

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const firstString = string1.length;
  const secondString = string2.length;
  const equalString = firstString === secondString
  return equalString
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const mouse = array[0]
  return mouse
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimo = array[array.length-1]
  return ultimo

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const primeiroElemento = array[0]
const ultimoElemento = array[array.length-1]
array.pop()
array.shift()
array.push(primeiroElemento)
array.unshift(ultimoElemento)

return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const primeiro = string1.toUpperCase()
const segundo = string2.toUpperCase()
return primeiro === segundo
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt(`Insira aqui o ano atual: `))
const anoNascimento = Number(prompt(`Insira o ano de nascimento: `))
const anoEmissao = Number(prompt(`Ano de emissão de seu RG: `))
const idade = anoAtual - anoNascimento
const renovacaoRg = anoAtual - anoEmissao
const precisaRenovar = (idade <= 20 && renovacaoRg >= 5) ||((idade > 20 && idade <= 50)  && renovacaoRg >= 10) || (idade > 50 && renovacaoRg >= 15) 

console.log(precisaRenovar)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
const bissexto = (ano % 400 == 0) || (ano % 4 == 0 && ano % 100 != 0 )
return bissexto

}
// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const idade = prompt()
const ensino = prompt()
const disponibilidade = prompt()

const inscricao = idade == "sim" && ensino =="sim" && disponibilidade == "sim"
console.log(inscricao)
}