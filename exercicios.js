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

function calculaAreaRetangulo(){
  const altura= parseFloat(prompt("Digite a altura do retangulo")); 
  const largura= parseFloat(prompt("Digite a largura do retangulo"));

   const area= altura*largura;

   console.log(`A área do retângulo é: ${area}`);


}

calculaAreaRetangulo();

// EXERCÍCIO 02
function imprimeIdade(){
  const anoAtual=parseInt(prompt("Qual e o ano atual"));
  const anoDeNascimento= parseInt(prompt("Qual e o ano que voce nasceu"));
 
   const idade= anoAtual-anoDeNascimento;
   console.log(`A sua idade é: ${idade}`);
 }
 
 imprimeIdade();

// EXERCÍCIO 03
function calculaIMC(){
  const peso=parseFloat(prompt("Qual e o seu peso"));
  const altura=parseFloat(prompt("Qual e a sua altura"));
 
  const imc= peso/altura;
  console.log(imc.toFixed(1))
 
  
 }
 
 calculaIMC()

// EXERCÍCIO 04

  function imprimeInformacoesUsuario(){
    const name=prompt(("Qual e o seu nome"));
    const idade=prompt(("Qual e a sua idade?"));
    const email=prompt((" Qual e o seu email"));
    
    console.log( "Meu nome é",{name},"tenho", {idade}, "anos", "e o meu email é", {email});
    }
    
    imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(){
  const cor1= prompt(("Qual e a sua cor primeira preferida"));
  const cor2= prompt(("Qual e a sua cor segunda preferida"));
  const cor3= prompt(("Qual e a sua cor  terceira preferida"));
  
  const cores=[cor1,cor2,cor3];
  return cores;
}


imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(){
  const name= "Kenia Araujo";
 
  console.log(name.toUpperCase());
 }
 
 retornaStringEmMaiuscula()

// EXERCÍCIO 07
function calculaIngressoEspetaculo(){
  const custo=prompt(("Qual e o custo"));
  const ingressoValor= prompt(("Qual e o valor do ingresso"));
  
  const lucro= custo/ingressoValor;
  return lucro;
}
calculaIngressoEspetaculo()

// EXERCÍCIO 08
function checaStringsMesmoTamanho(){
  const palavra1= prompt(("Digite uma palavra"));
  const palavra2= prompt(("Digite outra palavra"));

  
 return palavra1.length === palavra2.length;
 
  
}
checaStringsMesmoTamanho();

// EXERCÍCIO 09
  function retornaPrimeiroElemento(){
  const elemento1= prompt(("Preenche a primeira posicao"));
  const elemento2= prompt(("Preenche a segunda posicao"));
  const elemento3= prompt(("Preenche a terceira posicao"));
 
   const posicao1=[elemento1,elemento2, elemento3];
      return posicao1[0];
 
 }
 
 retornaPrimeiroElemento();

// EXERCÍCIO 10
function retornaPrimeiroElemento(){
  const elemento1= prompt(("Preenche a primeira posicao"));
  const elemento2= prompt(("Preenche a segunda posicao"));
  const elemento3= prompt(("Preenche a terceira posicao"));
 
   const posicao1=[elemento1,elemento2, elemento3];
      return posicao1[2];
 
 }
 
 retornaPrimeiroElemento();

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
    
    return array;
    
    
}
const elementos=["one", "two", "three","four","five"];

console.log(trocaPrimeiroEUltimo(elementos));


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(){
   
  const palavra1= prompt(("Digite uma palavra"));
  const palavra2= prompt(("Digite outra palavra"));

  
 return palavra1.toLowerCase() === palavra2.toLowerCase();
 

}

checaIgualdadeDesconsiderandoCase()


// EXERCÍCIO 13
function checaRenovacaoRG(){
  const anoAtual= parseInt(prompt("Digite o ano atual"));
  const anoNascimento=parseInt(prompt("Digite ano de nascimento"));
  const anoEmissaoRG=parseInt(prompt("Digite ano de Emissao do RG"));
 
  const idade= anoAtual-anoNascimento
  const tempoDesdeEmissao = anoAtual - anoEmissaoRG;
     if (idade <= 20 || idade === 20) {
         return tempoDesdeEmissao >= 5;
     } else if (idade > 20 && idade <= 50 || idade === 50) {
         return tempoDesdeEmissao >= 10;
     } else {
         return tempoDesdeEmissao >= 15;
 
         
     }
 }
 
 const precisaRenovar = checaRenovacaoRG();
 console.log("Precisa renovar o RG:", precisaRenovar);



// EXERCÍCIO 14

function checaAnoBissexto() {

  const ano=parseInt(prompt("Digite o ano atual"))

  if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
      return true;
  } else {
      return false;
  }
}


checaAnoBissexto();


// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // Solicitar informações ao usuário
  const idade = prompt("Você tem mais de 18 anos? (responda sim ou nao)").toLowerCase();
  const ensinoMedioCompleto = prompt("Você possui ensino médio completo? (responda sim ou nao)").toLowerCase();
  const disponibilidadeCurso = prompt("Você possui disponibilidade exclusiva durante os horários do curso? (responda sim ou nao)").toLowerCase();
// Verificar se todas as respostas são "sim"
  const inscricaoValida = idade === "sim" && ensinoMedioCompleto === "sim" && disponibilidadeCurso === "sim";

  // Exibir o resultado no console
  console.log("Inscrição válida para o curso da Labenu:", inscricaoValida);
}

// Chamar a função para testar
checaValidadeInscricaoLabenu();
