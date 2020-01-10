var btnCriaLista = document.querySelector("#cria-lista");
var btnCriaTarefa = document.querySelector("#cria-tarefa");
var container = document.querySelector("#container-listas")
var select = document.querySelector("#lista-select");
function criaLista(nomeLista){
    let nome = document.createTextNode(nomeLista);
    let titulo = document.createElement("h1");
    let lista = document.createElement("ul");
    let divTitulo = document.createElement("div");
    divTitulo.appendChild(titulo);
    divTitulo.id = "titulo-" + nomeLista;
    lista.id = nomeLista.replace(/ /g, "-");
    let divLista = document.createElement("div");
    titulo.appendChild(nome);
    divLista.appendChild(divTitulo);
    divLista.appendChild(lista);
    divLista.id = "lista-" + nomeLista;
    container.appendChild(divLista);
    let item = document.createElement("option");
    item.text = nomeLista;
    item.value = nomeLista;
    select.appendChild(item);
} 

function criaTarefa(listaId){
    listaId = listaId.replace(/ /g, "-");
    console.log(listaId);
    let nomeTarefa = document.querySelector("#nome-tarefa").value;
    let nome = document.createTextNode(nomeTarefa);
    let tarefa = document.createElement("li");
    let divTarefa = document.createElement("div");
    divTarefa.appendChild(nome);
    tarefa.appendChild(divTarefa);
    lista = document.querySelector("#"+ listaId + "");
    lista.appendChild(tarefa);
} 

btnCriaLista.onclick = function(){
    let nomeLista = document.querySelector("#nome-lista").value;
    if(nomeLista == ""){
        alert("O nome da lista não pode ser vazio");
        return false;
    }
    else{
        for (i = 1; i < select.length; i++) {
            if(nomeLista == select.options[i].value){
                alert("Duas listas não podem ter o mesmo nome!");
                return false;
            };
        }
    }
    criaLista(nomeLista);
    // saveToStorage();
}

btnCriaTarefa.onclick = function(){
    if(select.length < 2){
        alert("Crie uma lista antes de adicionar tarefas!")
        return false;
    }
    else if(select.value == "default"){
        alert("Selecione uma lista de tarefas!");
        return false;
    }
    criaTarefa(select.value);
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}