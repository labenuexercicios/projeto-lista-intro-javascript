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
  const numeroAltura = Number(prompt("Digite a altura do retângulo"))
  const numeroLargura = Number(prompt("Digite a largura do retângulo"))
  const areaRetangulo = numeroAltura * numeroLargura
  
  console.log(areaRetangulo)
}


// EXERCÍCIO 02
function imprimeIdade() {
    const anoAtual = Number(prompt("Digite o ano atual"))
    const anoDeNascimento = Number(prompt("Digite seu ano de nascimento"))
    const idade = anoAtual - anoDeNascimento
    
    console.log(idade)
}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const IMC = peso/(altura * altura).toFixed(2)

  return IMC
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  
  const nome = prompt(`Qual seu nome?`)
  const idade = prompt(`Qual sua idade?`)
  const email = prompt(`Qual seu email?`)

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt(`Qual sua cor favorita 1 ?`)
  const cor2 = prompt(`Qual sua cor favorita 2 ?`)
  const cor3 = prompt(`Qual sua cor favorita 3 ?`)

  console.log([cor1, cor2, cor3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(oi) {
    return oi.toUpperCase()
  }
  

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  
}


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
  
}

// EXERCÍCIO 09
  function retornaPrimeiroElemento(array) {
    return array[0]
  }
  const meuArray = [4, 5, 6]
  const primeiro = primeiroElemento(meuArray)
  console.log(primeiro)



// EXERCÍCIO 10

  function retornaUltimoElemento(array) {
    (array) 
    return array[array.length - 1];
  }
  

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  if (array.length < 2) {
    return array; // não há elementos para trocar
  }

  const primeiro = array[0];
  const ultimo = array[array.length - 1];
  array[0] = ultimo;
  array[array.length - 1] = primeiro;

  return array;
}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtualUser = Number(prompt("Digite o ano atual"))
  const anoNascimentoUser = Number(prompt("Digite seu ano de nascimento"))
  const anoEmissaoRG = Number(prompt("Digite o ano em que sua carteira de identidade foi emitida"))
  const idadeUser = anoAtualUser - anoNascimentoUser

  const condicao1 = (idadeUser <= 20) && (anoEmissaoRG + 5) <= anoAtualUser

  const condicao2 = (idadeUser > 20 && idadeUser <= 50) && (anoEmissaoRG + 10) <= anoAtualUser

  const condicao3 = idadeUser > 50 && (anoEmissaoRG + 15) < anoAtualUser

  console.log(condicao1 || condicao2 || condicao3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano1) {
    const ehMultiploDe400 = (ano1 % 400 === 0)
    const ehMultiploDe4 = (ano1 % 4 === 0)
    const ehMultiploDe100 = (ano1 % 100 === 0)
  
    return ehMultiploDe400 || (ehMultiploDe4  && !ehMultiploDe100)
  }
  const ano1 = 2000
  const ano2 = 2015
  const ano3 = 2024



// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {

  const idade = prompt("Você tem mais de 18 anos? (sim ou nao)");
  const ensinoMedio = prompt("Você possui ensino médio completo? (sim ou nao)");
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? (sim ou nao)");

  const idadeValida = idade === "sim";
  const ensinoMedioValido = ensinoMedio === "sim";
  const disponibilidadeValida = disponibilidade === "sim";

  const elegivel = idadeValida && ensinoMedioValido && disponibilidadeValida;

  console.log(elegivel);
  return elegivel;
}
