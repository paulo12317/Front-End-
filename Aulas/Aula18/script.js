let imgPokemon = document.querySelector("#fotoPoke");
let formPoke = document.querySelector("#form");
let inputF = document.querySelector("#inputF");
let nomeId = document.querySelector("#nome");
let nomePoke = document.querySelector("#idNome");
let idPoke = document.querySelector("#idPoke");
let info = document.querySelector("#info");
let tipo1 = document.querySelector("#tipo1");
let tipo2 = document.querySelector("#tipo2");
let habilidade = document.querySelector("#habilidade");
let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
let btnVoltar = document.querySelector("#voltar");
let btnProximo = document.querySelector("#proximo");

let numeroPokedex = 1;

const fetchPokemon = async(pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresponse.json();
    return data;
}

const showPokemon = async(pokemon) =>{
    const dataPokemon = await fetchPokemon(pokemon);
    imgPokemon.src = dataPokemon.sprites.front_default;
    nomePoke.innerHTML = "Nome: <b>" + dataPokemon.name+ "</b>";
    idPoke.innerHTML = "ID: " + dataPokemon.id;
    tipo1.innerHTML = dataPokemon.types[0].type.name;
    if(dataPokemon.types.length >1){
        tipo2.innerHTML = dataPokemon.types[1].type.name;
    }else{
        tipo2.innerHTML = ""
    }
    habilidade.innerHTML = "Habilidade: "+ dataPokemon.abilities[0].ability.name;
    peso.innerHTML = "Peso: "+ parseInt(dataPokemon.weight / 10) + "kg";
    altura.innerHTML = "Altura: "+ dataPokemon.height / 10 + "m";
}

formPoke.addEventListener("submit", (event) =>{
    event.preventDefault();
    showPokemon(inputF.value.toLowerCase());
    numeroPokedex = inputF.value
})

btnVoltar.addEventListener("click", (event) =>{
    if(numeroPokedex > 1){
        numeroPokedex--
    }
    showPokemon(numeroPokedex);
})

btnProximo.addEventListener("click", (event) =>{
    if(numeroPokedex <1000){
        numeroPokedex++
    }
    showPokemon(numeroPokedex);
})

showPokemon(numeroPokedex);