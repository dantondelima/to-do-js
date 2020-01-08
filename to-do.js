var btnCriaLista = document.querySelector("#cria-lista");
var btnCriaTarefa = document.querySelector("#cria-tarefa");
var container = document.querySelector("#container")
var select = document.querySelector("#lista-select");
function criaLista(){
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
    let nome = document.createTextNode(nomeLista);
    let titulo = document.createElement("h1");
    let lista = document.createElement("ul");
    lista.id = nomeLista;
    let divLista = document.createElement("div");
    titulo.appendChild(nome);
    divLista.appendChild(titulo);
    divLista.appendChild(lista);
    container.appendChild(divLista);
    let item = document.createElement("option");
    item.text = nomeLista;
    item.value = nomeLista;
    select.appendChild(item);
} 

function criaTarefa(lista){
    let nomeTarefa = document.querySelector("#nome-tarefa").value;
    let nome = document.createTextNode(nomeTarefa);
    let tarefa = document.createElement("li");
    let divTarefa = document.createElement("div");
    divTarefa.appendChild(nome);
    tarefa.appendChild(divTarefa);
    
} 

btnCriaLista.onclick = function(){
    criaLista();
    // saveToStorage();
}

btnCriaTarefa.onclick = function(){
    if(select.length < 2){
        alert("Crie uma lista antes de adicionar uma tarefa!")
        return false;
    }
    else if(select.value == "Selecione uma lista de tarefa"){
        alert("Selecione uma lista de tarefa!");
        return false;
    }
    criaTarefa(select.value);
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}