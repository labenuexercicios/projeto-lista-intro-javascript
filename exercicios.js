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
  
  let altura = prompt ("Altura do retangulo");
  let largura = prompt ("Largura do retangulo");
  
  const areaDoRetangulo = altura*largura;
  console.log (areaDoRetangulo);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
    
    var anoAtual = prompt ("Informe o ano atual");
    var anoDeNacimento = prompt ("Informe o seu ano de nascimento");
  
    const imprimeIdade = anoAtual - anoDeNacimento;
    console.log (imprimeIdade);
  }
  
  


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 
  const imc = peso/(altura*altura)
  return imc
  
 console.log ("3)", calculaIMC (70,1.70))
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  
  let nome = prompt (`Insira o seu nome`);
  let idade = Number (prompt (`insira a sua idade`));
  let email = prompt (`insira o seu e-mail`);
  
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05 
function imprimeTresCoresFavoritas() {
  
  const cor1 = prompt("Digite a sua cor favorita")
  const cor2 = prompt("Digite a sua segunda cor favorita")
  const cor3 = prompt("Digite a sua terceira cor favorita")

  console.log([cor1,cor2,cor3]);

}

// EXERCÍCIO 06

  function retornaStringEmMaiuscula(string) {
    // implemente sua lógica aqui
  
    const saudacao = "oi";
    return string.toUpperCase()
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
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let troca = array[0]

  array[0] = array[array.length-1]

  array[array.length-1] = troca

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Ano Atual: '))
  const anoNascimento = Number(prompt('Ano de nascimento: '))
  const anoEmissao = Number(prompt('Ano de emissão CNH: '))

  const idade = anoAtual - anoNascimento;
  const tempoDeEmissao = anoAtual - anoEmissao;

  const precisaRenovarCincoAnos = idade <= 20 || idade === 20;
  const precisaRenovarDezAnos = idade > 20 && idade < 50 || idade === 50;
  const precisaRenovarQuinzeAnos = idade >= 50;

  const renovarCincoAnos = precisaRenovarCincoAnos && tempoDeEmissao >= 5;
  const renovarDezAnos = precisaRenovarDezAnos && tempoDeEmissao >= 10;
  const renovarQuinzeAnos = precisaRenovarQuinzeAnos && tempoDeEmissao >= 15;

  const precisaRenovar = renovarCincoAnos || renovarDezAnos || renovarQuinzeAnos;

  console.log(precisaRenovar);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  return ano % 400 == 0 || (ano % 4 == 0 && ano % 100 != 0)

  return verficaAnoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const mais18 = prompt('Voce tem mais de 18 anos?') === 'sim'
  const ensinoMedioCompleto = prompt ('Possui ensino medio completpo?') === 'sim'
  const disponibilidade = prompt('Possui disponibilidade Exclusiva?' ) === 'sim'

  const comparar = mais18 && ensinoMedioCompleto && disponibilidade
  console.log(comparar)

}