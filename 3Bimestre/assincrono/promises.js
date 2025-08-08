function buscarUsuario() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Usuário encontrado');
      resolve();
    }, 1000);
  });
}

function buscarPerfil() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Perfil do usuário encontrado');
      resolve();
    }, 1000);
  });
}

function exibirMensagem() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Bem-vindo ao sistema!');
      resolve();
    }, 1000);
  });
}

buscarUsuario()
  .then(buscarPerfil)
  .then(exibirMensagem)
  .then(() => {
    console.log('Processo concluído');
  });

// `.then()`: Usado para tratar uma Promise resolvida.
//  `.catch()`: Usado para tratar uma Promise rejeitada.
// `.finally()`: Executa um bloco de código independente do resultado da Promise.