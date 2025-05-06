let nome1 = "";
let idade = 0;
let cpf = 0;
let num = 0;
let botao = document.getElementById("troca")
let i = 0

function clicar(){
    if(i== 4){
        i=0
    }else{
        i += 1;
    }
    
    fetch("data.json")
    .then(response => response.json())
    .then(listaPessoas => {
            nome1 = listaPessoas.pessoas[i].nome;
            idade = listaPessoas.pessoas[i].idade;
            cpf = listaPessoas.pessoas[i].cpf;
            num = listaPessoas.pessoas[i].telefone;
            
        document.querySelector("h1").innerHTML = nome1
        document.querySelector("p").innerHTML = "Idade: "+idade+"\n CPF: "+ cpf+"\n Telefone: "+num
    })
}

fetch("data.json")
    .then(response => response.json())
    .then(listaPessoas => {
            nome1 = listaPessoas.pessoas[i].nome;
            idade = listaPessoas.pessoas[i].idade;
            cpf = listaPessoas.pessoas[i].cpf;
            num = listaPessoas.pessoas[i].telefone;

        document.querySelector("h1").innerHTML = nome1
        document.querySelector("p").innerHTML = "Idade: "+idade+"\n CPF: "+ cpf+"\n Telefone: "+num
    })