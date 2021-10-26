/* elementos estáticos de ações da página */ 

var btnCriaLista = document.querySelector("#cria-lista");
var btnCriaTarefa = document.querySelector("#cria-tarefa");
var container = document.querySelector("#container-listas")
var select = document.querySelector("#lista-select");

function criaLista(nomeLista, nomeListaId){
    let nome = document.createTextNode(nomeLista);
    let titulo = document.createElement("h1");
    let btnExcluir = document.createElement("button");
    let lista = document.createElement("ul");
    let divTitulo = document.createElement("div");

    lista.id = nomeListaId

    btnExcluir.id = "btn-" + nomeListaId;
    btnExcluir.onclick = () => deletaLista(btnExcluir.id);

    divTitulo.appendChild(titulo);
    divTitulo.appendChild(btnExcluir);  
    titulo.appendChild(nome);

    let divLista = document.createElement("div");
    divLista.appendChild(divTitulo);
    divLista.appendChild(lista);
    divLista.id = "lista-" + nomeListaId;

    container.appendChild(divLista);

    let item = document.createElement("option");
    item.text = nomeLista;
    item.setAttribute("data-id", nomeListaId);

    select.appendChild(item);
} 

function criaTarefa(listaId, posicao){
    let nomeTarefa = document.querySelector("#nome-tarefa").value;
    let nome = document.createTextNode(nomeTarefa);
    let tarefa = document.createElement("li");
    let divTarefa = document.createElement("div");
    let btnExcluir = document.createElement("button");

    btnExcluir.onclick = () => deletaTarefa(listaId + "-" + posicao);

    divTarefa.appendChild(nome);
    divTarefa.appendChild(btnExcluir);

    tarefa.setAttribute("data-pos", listaId + "-" + posicao);
    tarefa.appendChild(divTarefa);

    lista = document.querySelector("#"+ listaId + "");
    lista.appendChild(tarefa);
} 

function deletaLista(id){
    let item = id.substring(4);
    document.querySelector("#lista-" + item).remove();
    document.querySelector("[data-id=" + item + "]").remove();
}

function deletaTarefa(id){
    document.querySelector("[data-pos=" + id + "]").remove();
}

btnCriaLista.onclick = function(){
    let nomeLista = document.querySelector("#nome-lista").value;
    nomeLista = nomeLista.trim();
    let nomeListaId = nomeLista.replace(/ /g, "-");
    if(nomeLista == ""){
        alert("O nome da lista não pode ser vazio");
        return false;
    }
    else{
        for (i = 1; i < select.length; i++) {
            if(nomeListaId == select.options[i].getAttribute("data-id")){
                alert("Duas listas não podem ter o mesmo nome!");
                return false;
            };
        }
    }
    criaLista(nomeLista, nomeListaId);
}

btnCriaTarefa.onclick = function(){
    let id = select.children[select.selectedIndex].getAttribute("data-id");
    if(select.length < 2){
        alert("Crie uma lista antes de adicionar tarefas!")
        return false;
    }
    else if(id == "default"){
        alert("Selecione uma lista de tarefas!");
        return false;
    }
    else{
        let lista = document.querySelectorAll("#" + id + " li");
        let posicao = lista.length + 1;
        criaTarefa(id, posicao);
    }
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}
