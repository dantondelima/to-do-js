var btnCriaLista = document.querySelector("#cria-lista");
var btnCriaTarefa = document.querySelector("#cria-tarefa");
var container = document.querySelector("#container")
function criaLista(){
    var nomeLista = document.querySelector("#nome-lista").value;
    var nome = document.createTextNode(nomeLista);
    var titulo = document.createElement("h1");
    var divTarefas = document.createElement("div");
    var divLista = document.createElement("div");
    titulo.appendChild(nome);
    divLista.appendChild(titulo);
    divLista.appendChild(divTarefas);
    container.appendChild(divLista);
} 

btnCriaLista.onclick = function(){
    criaLista();
    // saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}