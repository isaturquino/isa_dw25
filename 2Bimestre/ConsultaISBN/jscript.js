document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    consultaIsbn();
});

function consultaIsbn(){
    const isbn = document.getElementById("isbn").value;
    const url = `https://brasilapi.com.br/api/isbn/v1/${isbn}`;

    if (!/^\d{10}(\d{3})?$/.test(isbn)) {
        alert(" 400 ISBN inválido! Certifique-se de digitar 10 ou 13 dígitos numéricos.");
        return;
    }

    fetch(url)
    .then((response) => {
            return response.json();
        })
    .then((data) => {
            if(data.naoencontrado){
                alert("404 ISBN não encontrado");
                return;
            } else if (data.erro) {
                alert("500 Todos os serviços de ISBN retornaram erro");
                return;
            }
            document.getElementById("titulo").textContent = "Título: " + (data.title || "Não disponível");
            document.getElementById("autor").textContent = "Autor(es): " + (data.authors || "Não disponível");
            document.getElementById("editora").textContent = "Editora: " + (data.publisher || "Não disponível");
            document.getElementById("ano").textContent = "Ano de publicação: " + (data.year || "Não disponível");
            document.getElementById("paginas").textContent = "Quantidade de páginas: " + (data.page_count || "Não disponível");
            document.getElementById("assunto").textContent = "Assunto(s): " + (data.subjects || "Não disponível");
        })
         .catch((error) => {
            alert("ERRO AO BUSCAR ISBN! Tente novamente mais tarde.");
         })

}