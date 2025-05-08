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
    imgPokemon.src = dataPokemon.sprites.other.showdown.front_default;
    nomePoke.innerHTML = "<b>" + dataPokemon.name+ "</b>";
    idPoke.innerHTML = "#" + dataPokemon.id;
    tipo1.innerHTML = dataPokemon.types[0].type.name;
    if(tipo1.innerText == "fire"){
        tipo1.style.backgroundColor = "red";
    }else if(tipo1.innerText == "water"){
        tipo1.style.backgroundColor = "blue";
    }else if(tipo1.innerText == "bug"){
        tipo1.style.backgroundColor = "rgb(73, 193, 71)";
    }else if(tipo1.innerText == "flying"){
        tipo1.style.backgroundColor = "rgb(177, 197, 177)";
    }else if(tipo1.innerText == "dragon"){
        tipo1.style.backgroundColor = "rgb(48, 21, 138)";
    }else if(tipo1.innerText == "grass"){
        tipo1.style.backgroundColor = "rgb(10, 156, 0)";
    }else if(tipo1.innerText == "dark"){
        tipo1.style.backgroundColor = "rgb(54, 58, 54)";
    }else if(tipo1.innerText == "ghost"){
        tipo1.style.backgroundColor = "rgb(63, 11, 78)";
    }else if(tipo1.innerText == "pychc"){
        tipo1.style.backgroundColor = "rgb(202, 3, 172)";
    }else if(tipo1.innerText == "electric"){
        tipo1.style.backgroundColor = "yellow";
    }else if(tipo1.innerText == "fairy"){
        tipo1.style.backgroundColor = "#ff4ae4";
    }else if(tipo1.innerText == "fight"){
        tipo1.style.backgroundColor = "#ac0000";
    }else if(tipo1.innerText == "poison"){
        tipo1.style.backgroundColor = "#510063";
    }else if(tipo1.innerText == "ground"){
        tipo1.style.backgroundColor = "#996607";
    }else if(tipo1.innerText == "rock"){
        tipo1.style.backgroundColor = "#977537";
    }else if(tipo1.innerText == "ice"){
        tipo1.style.backgroundColor = "#2fe0cf";
    }else if(tipo1.innerText == "steel"){
        tipo1.style.backgroundColor = "#69646b";
    }else if(tipo1.innerText == "normal"){
        tipo1.style.backgroundColor = "#b7b7b7";
    }

    if(tipo2.innerText == "fire"){
        tipo2.style.backgroundColor = "red";
    }else if(tipo2.innerText == "water"){
        tipo2.style.backgroundColor = "blue";
    }else if(tipo2.innerText == "bug"){
        tipo2.style.backgroundColor = "rgb(73, 193, 71)";
    }else if(tipo2.innerText == "flying"){
        tipo2.style.backgroundColor = "rgb(177, 197, 177)";
    }else if(tipo2.innerText == "dragon"){
        tipo2.style.backgroundColor = "rgb(48, 21, 138)";
    }else if(tipo2.innerText == "grass"){
        tipo2.style.backgroundColor = "rgb(10, 156, 0)";
    }else if(tipo2.innerText == "dark"){
        tipo2.style.backgroundColor = "rgb(54, 58, 54)";
    }else if(tipo2.innerText == "ghost"){
        tipo2.style.backgroundColor = "rgb(63, 11, 78)";
    }else if(tipo2.innerText == "pychc"){
        tipo2.style.backgroundColor = "rgb(202, 3, 172)";
    }else if(tipo2.innerText == "electric"){
        tipo2.style.backgroundColor = "yellow";
    }else if(tipo2.innerText == "fairy"){
        tipo2.style.backgroundColor = "#ff4ae4";
    }else if(tipo2.innerText == "fight"){
        tipo2.style.backgroundColor = "#ac0000";
    }else if(tipo2.innerText == "poison"){
        tipo2.style.backgroundColor = "#510063";
    }else if(tipo2.innerText == "ground"){
        tipo2.style.backgroundColor = "#996607";
    }else if(tipo2.innerText == "rock"){
        tipo2.style.backgroundColor = "#977537";
    }else if(tipo2.innerText == "ice"){
        tipo2.style.backgroundColor = "#2fe0cf";
    }else if(tipo2.innerText == "steel"){
        tipo2.style.backgroundColor = "#69646b";
    }else if(tipo2.innerText == "normal"){
        tipo2.style.backgroundColor = "#b7b7b7";
    }

    if(dataPokemon.types.length >1){
        tipo2.innerHTML = dataPokemon.types[1].type.name;
        tipo2.style.display = "inline"
    }else{
        tipo2.innerHTML = ""
        tipo2.style.display = "none"
    }
    habilidade.innerHTML = "Habilidade: "+ dataPokemon.abilities[0].ability.name;
    peso.innerHTML = "Peso: "+ parseInt(dataPokemon.weight / 10) + "kg";
    altura.innerHTML = "Altura: "+ dataPokemon.height / 10 + "m";
    const audio = new Audio(dataPokemon.cries.latest);
    audio.play();
    if (dataPokemon.types[1] != undefined) {tipo2.innerHTML = dataPokemon.types[1].type.name;} else {tipo2.innerHTML = "";}
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