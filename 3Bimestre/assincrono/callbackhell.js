function buscarUsuario() {
    setTimeout(() => {
        console.log("Usuário encontrado")
    }, 5000);
}
function buscarPerfil() {
    setTimeout(()=> {
        console.log("Perfil do usuário encontrado")
    }, 3000);
}

function exibirMensagem(){
    setTimeout(() => {
        console.log("Bem-vindo ao sistema!")
    }, 1000);
}

buscarUsuario();
buscarPerfil();
exibirMensagem();
// como ordenar a função mesmo sendo Assíncrona

function buscarUsuario(callback) {
    setTimeout(() => {
        console.log("Usuário encontrado")
        callback()
    }, 5000);
}
function buscarPerfil(callback) {
    setTimeout(()=> {
        console.log("Perfil do usuário encontrado")
        callback()
    }, 3000);
}

function exibirMensagem(callback){
    setTimeout(() => {
        console.log("Bem-vindo ao sistema!")
        callback()
    }, 1000);
}

buscarUsuario(() => {
    console.log("Busca usuário terminou")
    buscarPerfil(() => {
        console.log("Busca perfil terminou")
        exibirMensagem(() => {
            console.log("Mensagem exibida")
        })
    })
    });
