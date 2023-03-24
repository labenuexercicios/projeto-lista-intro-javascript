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
  const altura = Number(prompt ("Insira a altura do retangulo:"))
  const largura = Number(prompt("Insura a largura do retângulo:"))
  console.log (altura*largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt ("Insira o ano atual:"))
  const anoNascimento = Number(prompt ("Insira o ano de nascimento:"))
  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso/(altura**2)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nome = (prompt ("Informe seu nome:"))
  const idade = (prompt ("Informe sua idade:"))
  const email = (prompt ("Informe seu e-mail:"))
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const primeiraCor = (prompt ("Diga a sua cor preferida:"))
  const segundaCor= (prompt ("Diga a sua segunda cor preferida:"))
  const terceiraCor = (prompt ("Diga a sua terceira cor preferida:"))
  coresPreferidas = [primeiraCor, segundaCor, terceiraCor]
  console.log(coresPreferidas)
} 

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso
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
  return array[array.length - 1]
  //prestar atenção e depois anotar incluisve, as diferenças de 
  //atributos para methods. Nesse caso, como é atributo, não usa o ().
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]]; 
  return array
  //mesma coisa aqui, que é um atributo, então não tem ()
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
 return string1.toLowerCase() == string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual= Number(prompt("Qual é o ano atual?"))
  const anoNascimento= Number(prompt("Qual o ano do seu nascimento?"))
  const anoEmissaoRG= Number(prompt("Em que ano seu RG foi emitido?"))
  const idade = anoAtual-anoNascimento
  const validade = anoAtual - anoEmissaoRG

  const condicao1 =(idade <= 20) && (validade >=5) 
  const condicao2= (20 < idade && idade <=50) && (validade >=10) 
  const condicao3 = (idade > 50) && (validade >=15)

  const renovacao = condicao1 || condicao2 || condicao3

  console.log(renovacao)
}

// // EXERCÍCIO 14
 function checaAnoBissexto(ano) {
  const condition1 = ano%400==0
  const condition2 = (ano%4==0) && (!(ano%100==0) || ano%400==0)

  const comparation = condition1 || condition2

  return comparation
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const idade= prompt("Você tem mais que 18 anos? Responda com sim ou nao")
  const escolaridade= prompt("Você possui ensino médio completo? Responda com sim ou nao")
  const disponibilidade= prompt("Você possui disponibilidade exclusiva durante os horários do curso? Responda com sim ou nao")
  const validadeInscricao= (idade == "sim") && (escolaridade == "sim") && (disponibilidade == "sim")
  
  console.log(validadeInscricao)
}