//Essa função só acontece quando passa-se o tempo
function digaOla() {
  console.log("Olá");
}

setTimeout(digaOla, 2000)

// Quando se passa uma função para outra função isso se chama Callback 
function saudacao(nome, callback) {
  console.log('Olá, ' + nome + '!');
  callback();
}

function mensagemDeDespedida() {
  console.log('Até logo!');
}

function mensagemDeBoasVindas() {
  console.log('Seja bem vindo(a)!');
}

saudacao('Joao', mensagemDeBoasVindas);
saudacao('Maria', () => console.log("checkin concluído"));


//Exemplo

function obterDados(url, callback) {
  setTimeout(() => {
    const dados = { usuario: 'João', idade: 25 }; // Simulando uma busca de dados
    callback(dados);
  }, 2000); // Simulando uma operação demorada
}

function mostrarDados(dados) {
  console.log(`Nome: ${dados.usuario}, Idade: ${dados.idade}`);
}

obterDados('https://api.exemplo.com/dados', mostrarDados);
// Após 2 segundos, saída:
// Nome: João, Idade: 25

