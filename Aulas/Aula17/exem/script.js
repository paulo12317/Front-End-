let nome1 = "";
let cidade = "";

let paragrafo = document.getElementById("demo")

fetch("data.json")
    .then(response => response.json())
    .then(listaPessoas => {
            nome1 = listaPessoas.pessoas[0].nome;
            cidade = listaPessoas.pessoas[0].local.cidade;
            
        paragrafo.innerHTML = "Primeiro registro do array contem dados do <b>\"" + nome1 + "\"</b> de <b>" + cidade + "</b>";
    })

