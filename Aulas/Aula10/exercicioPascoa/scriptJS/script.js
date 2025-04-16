let titulo = document.querySelector("#titulo");
let n = 0;
function mudarTexto(){
    if(n ==0){
        titulo.textContent = "Tenha um bom dia!";
        n++;
    }else{
        titulo.textContent = "Feliz Pascoa!";
        n--;
    }
    
}

titulo.onclick = mudarTexto;
let body = document.querySelector("body");
let d = 0;
function confetes() {
    if(d == 0){
        document.body.style.backgroundColor = '#fff';
        document.body.style.backgroundImage = "url('./img/fundo.png')";
    }else{
        document.body.style.backgroundColor = '#fff';
    }
    
}