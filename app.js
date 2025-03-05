let amigos = [];
// Função para exibir os nomes na tela em lista
function atualizaLista() {
        
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = "";
        
        for (let i = 0; i < amigos.length; i++) {
            let itemLista = document.createElement('li');
            itemLista.innerText = amigos[i];
            lista.appendChild(itemLista);
        }
    }
//Função que verifica se o campo está vazio ou se já possui o mesmo amigo na lista, pra não repetir nome
function adicionarAmigo(){
    limpaResultado();
    let nomeInserido = document.querySelector('input').value;
    if (nomeInserido=='' ) {
     alert ('Por favor, insira um nome.');
    } 
    else { if (amigos.includes(nomeInserido)){
        alert ('Essa pessoa já está na lista, insira outro nome.')
        limparCampo();
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
function sortearAmigo() {       
        if (amigos.length == 0) {
            alert('Não há amigos para sortear. Adicione alguns nomes primeiro.');
            
        } else {
        let amigoAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[amigoAleatorio];
    
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;
        zerarLista();
        }
    }
//Esta função apaga os itens da lista e apaga os nomes na tela, fazendo com que seja necessário um novo preenchimento para novo sorteio.
function zerarLista() {
    amigos=[];
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
}
//Função para limpar o resultado do sorteio anterior da tela
function limpaResultado(){
    resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}



