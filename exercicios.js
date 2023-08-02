// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  let resultado = num1 + num2
  return resultado
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt('Olá mundo')
  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  let altura = Number(prompt("Digite a altura do retangulo"));
  let largura = Number(prompt("Digite a largura do retangulo"))
  let area = altura * largura
  console.log(area);

}

// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = prompt('Qual o ano atual?');
  let anoNascimento = prompt('Qual o seu ano de nascimento?');
  const idadeFinal = (anoAtual - anoNascimento);
  console.log(idadeFinal);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const soma = peso / (altura * altura);
  return soma
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  nome = prompt("Digite seu nome:")
  idade = prompt("Qual sua idade?")
  email = prompt("Digite seu email:")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  corfav1 = prompt("Digite a primeira cor");
  corfav2 = prompt("Digite a segunda cor");
  corfav3 = prompt("Digite a terceira cor");
  const imprimeTresCoresFavoritas = [corfav1, corfav2, corfav3];
  console.log(imprimeTresCoresFavoritas);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  let stringEmMaiuscula = string
  return stringEmMaiuscula.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  let quantidade = custo / valorIngresso
  return quantidade
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  let tamanho = (string1.length === string2.length)
  return tamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

  array: [1, 2, 3, 4, 5, 6];
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const tamanhoArray = array.length
  const x = array[0]
  array[0] = array[tamanhoArray - 1]
  array[tamanhoArray - 1] = x
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  let igualde = string1.toUpperCase() === string2.toUpperCase()
  return igualde
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoNascimento = Number(prompt("Digite o ano do seu nascimento"))
  const anoEmissao = Number(prompt("Digite o ano de emissao do seu RG"))

  const idade = anoAtual - anoNascimento
  const idadeCarteira = anoAtual - anoEmissao

  if (idade <= 20) {
    console.log(idadeCarteira >= 5);
  } else if (idade <= 50) {
    console.log(idadeCarteira >= 10);
  } else {
    console.log(idadeCarteira >= 15);
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  let condicao = (ano % 4 === 0 && ano % 100 != 0) || (ano % 400 === 0)
  return condicao
}


// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade = prompt("Tem mais de 18?")
  const estudo = prompt("Tem ensino médio completo?")
  const disponibilidade = prompt("Tem disponibilidade de horários?")
  const maiorIdade = idade === "sim";
  console.log(maiorIdade && estudo === disponibilidade);
}