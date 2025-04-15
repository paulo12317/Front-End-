function validaBusca(){
    if(document.querySelector('#inputlupa').value==""){
        alert("Não pode estar em branco");
        return false;
    }
}

document.querySelector('#formbusca').onsubmit= validaBusca;
