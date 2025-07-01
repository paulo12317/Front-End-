alert("Hello-Word");

let titulo = document.querySelector("#titulo");
titulo.textContent = "Novo Texto";
titulo.style.color = "red";

function alerta(){
    alert("Bombardiro Crocodilo");
}

function mostraText(texto){
    alert(texto);
}

titulo.onclick = mostraText("tun tun tun tun tun tuh tuh sahur");
