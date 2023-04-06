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
  const base = prompt("digite um lado")
  const altura = prompt("digite uma altura")
  const area = base * altura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoatual = prompt("digite sua idade")
  let anonascimento = prompt("digite seu ano de nascimento")
  let suaidade = anoatual - anonascimento
  console.log(suaidade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  let imc = (peso / (altura * altura)).toFixed(1)
  return (imc)


}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt()
  let idade = prompt()
  let email = prompt()
  let mensagem = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(mensagem)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt()
  let cor2 = prompt()
  let cor3 = prompt()
  let coresfavoritas = []
  coresfavoritas.push(cor1, cor2, cor3)

  console.log(coresfavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const valor1 = string.toUpperCase()
  return (valor1)

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let ingresso = custo / valorIngresso;
  console.log(ingresso);
  return (ingresso)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const valor1 = string1
  const valor2 = string2
  console.log(valor1);
  console.log(valor2);
  if (valor1.length == valor2.length) {
    return true
  } else {
    return false
  }
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

   
  console.log(array)
  console.log(array[0]);
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  console.log(array)
  console.log(array[array.length - 1])
  return (array[array.length - 1]);

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui funcionou somente assim, método reverse() não funcionou, eu tentei!
  let aux = 0
  console.log("inicio")
  console.log(array)
  aux = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = aux

  console.log("Final")
  console.log(array)
 return(array)

}


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let valor1 = string1.toUpperCase()
  let valor2 = string2.toUpperCase()
  console.log(valor1)
  console.log(valor2)
  if (valor1 == valor2) {
    return true
  } else {
    return false
  }

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Informe o ano atual");
  let anoNascimento = prompt("informe o ano de nascimento")
  let Emissao= prompt("Ano de emissao do RG");
  let anoEmissao = anoAtual - Emissao
  let idade = anoAtual - anoNascimento 
  const renova20 = (idade >18 ) && (anoEmissao>5)
  const renova30 = (idade >=20 && idade<=50) && (anoEmissao>10)
  const renova50 = (idade>=50) && (anoEmissao>15)
  const renovacaoRG = renova20 && renova30 && renova50 
  console.log(renovacaoRG)
  
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const condicao1 = ano % 4 ==0;
  const condicao2 = (ano % 4==0) && ((ano % 100!==0 ) || (ano % 400==0)) 
  console.log(ano)
  return(condicao1 && condicao2)
   
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let ensinomedio = prompt("Voce tem ensino médio completo ")
  let disponibilidade = prompt("Você tem disponiblidade de horario?")
  let maiorIdade = prompt("Você é maior de 18 anos ?")
  console.log("Ensino medio completo "+ensinomedio)
  console.log("disponibilidade de tempo "+ disponibilidade)
  console.log("Maior de idade "+maiorIdade)
  if ((ensinomedio == "sim") && (disponibilidade == "sim") && (maiorIdade == "sim")) {
    console.log(true)
  } else {
    console.log(false)
  }
}