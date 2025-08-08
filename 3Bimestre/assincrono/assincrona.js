// Síncrona
function tarefa1() {
  console.log("Executando tarefa 1...");
}

function tarefa2() {
  console.log("Executando tarefa 2...");
}

tarefa1();
tarefa2();

//Assíncrona a tarefa 2 não precisou esperar a tarefa 1 ser executada
function tarefa1() {
  setTimeout(() => {
    console.log("Executando tarefa 1...");
  }, 2000); // Simula uma operação demorada
}

function tarefa2() {
  console.log("Executando tarefa 2...");
}

tarefa1();
tarefa2();

