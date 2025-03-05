let amigos = [];

let listaAmigos= document.querySelector('ul');
    listaAmigos.innerHTML= amigos;







function adicionarAmigo(){
    let nomeInserido = document.querySelector('input').value;

    if (nomeInserido=='') {
     alert ('Por favor, insira um nome.');
    } 
    else {
     amigos.push(nomeInserido);
     console.log(amigos);
     limparCampo();
    }
    }

function limparCampo() {
        nomeInserido = document.querySelector('input');
        nomeInserido.value= '';
    }



