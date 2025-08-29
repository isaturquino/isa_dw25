//estrutura básica
const tarefa1 = new Promise((resolve, reject) => {
});

function tarefa2() {
    const sucesso = true 
    const promessa = new Promise((resolve, reject)=> {

        if (sucesso) {
            resolve()
        }else {
            reject()
        }

        resolve()
        reject()
    })
    return promessa
}
tarefa2() .then().catch()