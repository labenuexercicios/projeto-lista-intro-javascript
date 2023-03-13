// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
    const somaDosDois = num1 + num2
    return num1 + num2
}
soma(30 ,20)
// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
    const mensagem = prompt('olá mundo')

    console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
    const altura =  Number(prompt `Fale uma altura`)
    const largura = Number(prompt `Fale uma largura`)
    const calculaArea = altura * largura
    console.log(calculaArea)

}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
    const anoAtual = Number(prompt `escreva o ano atual`)
    const anoDeNacimento = Number(prompt `qual seu ano de nacimento?`)
    const idade = anoAtual - anoDeNacimento
    console.log(idade)
    return anoAtual - anoDeNacimento
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
    const imc = peso / (altura * altura)
    return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
    const nome = prompt(`Coloque seu nome?`)
    const idade = prompt(`Coloque sua idade?`)
    const email = prompt(`Qual é seu email?`)
    const mensagem = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
    console.log(mensagem)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
    const cor1 = prompt(`Escolha uma cor`)
    const cor2 = prompt(`Escolha a segunda cor`)
    const cor3 = prompt(`Escolha a terceira cor`)
    const resultado = [cor1, cor2, cor3]
    console.log(resultado)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
    const frase = prompt(string)
    const fraseToUperCase = frase.toUpperCase();
    return fraseToUperCase

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
   const custoDoEspetaculo = custo
   const valorDoIngresso = custo / valorIngresso
   return valorDoIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
    const frase1 = string1.length === string2.length
    return frase1
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
    return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
    const tamanhoDoArrey = array.length
    const ultimoElemento = array[tamanhoDoArrey-1]
    return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
    const primeiroEle = array[0]
    const ultimo = array [array.length -1]
     array.pop()
     array.shift()
    array.push(primeiroEle)
    array.unshift(ultimo)
    return array

}
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
    const primeiraString = string1.toUpperCase()
    const segundaString = string2.toUpperCase()
    const saoIguais = primeiraString === segundaString
    return saoIguais
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
    const anoAtual = Number(prompt(`Digite o ano Atual?`))
    const nacimento = Number(prompt(`Digite o ano do seu nacimento?`))
    const emissaoDaIndentidade = Number(prompt(`Qual o ano da emiçao?`))
    const idade = anoAtual - nacimento
    const emissaoRG = anoAtual - emissaoDaIndentidade
 
 
    const checandoTempoVinteOuMenor = (idade <= 20) && (emissaoRG >= 5)

    const checandoTempovinteOuMaior = (idade > 20 ) && (idade <= 50) && (emissaoRG >= 10)

    const checandoPessoasCinquntaMais = (idade > 50) && (emissaoRG >= 15)
    const resultato = checandoTempoVinteOuMenor || checandoTempovinteOuMaior || checandoPessoasCinquntaMais
    console.log(resultato)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
     const condicao1 = ano % 400 === 0
     const condicao2 = (ano % 4 === 0) && !(ano % 100 === 0 && ano % 400 !== 0)
     return condicao2
//   // Depois é só retornar um OU outro
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
    const pergunta1 = prompt(`Você tem mais de 18 anos?`)
    const pergunta2 = prompt(`Você possui ensino médio completo?`)
    const pergunta3 = prompt(`Você possui disponibilidade exclusiva durante os horários do curso?`)
    console.log(pergunta1 === "sim" && pergunta2 === "sim" && pergunta3 === "sim")
}