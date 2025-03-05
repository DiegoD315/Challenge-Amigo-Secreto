let amigos = [];

function atualizaLista() {
        
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = "";
        
        for (let i = 0; i < amigos.length; i++) {
            let itemLista = document.createElement('li');
            itemLista.innerText = amigos[i];
            lista.appendChild(itemLista);
        }
        
    }






function adicionarAmigo(){
    let nomeInserido = document.querySelector('input').value;

    if (nomeInserido=='' ) {
     alert ('Por favor, insira um nome.');
    } 
    else { if (amigos.includes(nomeInserido)){
        alert ('Esse amigo já está na lista, insira outro amigo.')
    } else {
     amigos.push(nomeInserido);
     console.log(amigos);
     limparCampo();
     atualizaLista();
    }
    }
}

function limparCampo() {
        nomeInserido = document.querySelector('input');
        nomeInserido.value= '';
    }


    



