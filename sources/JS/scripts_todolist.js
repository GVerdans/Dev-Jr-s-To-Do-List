"use strict";

const todoInput = document.getElementById("ipt-txt-todo");
const butaoInsertTask = document.querySelector("#btn-insert-task");
const btnDeleteAll = document.querySelector("button.btn-delete-all-tasks");
const ulDasLiPrincipal = document.querySelector("ul.tasks");
const ulDasLiHistory = document.querySelector("ul.tasks-history");
const butaoDeleteTask = document.getElementById("btn-task-delete");
let yarraDosItens = [];
let yarraDoAside = [];

function mostrarTarefas() {
  let newLi = "";
  yarraDosItens.forEach((item, index) => {         
    // item e index já são os parametros da arrow function '() => {}'

    // Valores padrão do forEach (valor atual, index, array completo(no caso não usado));
    newLi += `<li class="task-li-${item.status && "done"}">
        ${item.task}
        <input type="button" value="&check;" class="btn-task" id="btn-task-done" title="Done" onclick="doneTask(${index})">
        
        <input type="button" value="X" class="btn-task" id="btn-task-delete" title="Delete" onclick="deleteTask(${index})">
        </li>`;

        // 'item' é o objeto yarraDosItens e 'task' e 'status' são as propriedades do objeto yarraDosItens ;)
        // E o Index é o index mesmo :)
  });

  ulDasLiPrincipal.innerHTML = newLi;
  // console.table(yarraDosItens);

  localStorage.setItem("lista", JSON.stringify(yarraDosItens));
};

function mostrarHistorico() {
  let newLiHistory = "";

  yarraDoAside.forEach((item) => {
    newLiHistory += `
    <li class = "li-history">
    <p class="item-history">${item.task}</p>
    </li>`
  });

  ulDasLiHistory.innerHTML = newLiHistory;
  localStorage.setItem("History", JSON.stringify(yarraDoAside));
}

function jogarItensNoArrayPrincipal() {

  todoInput.classList.replace('input-field-alert', 'input-field');
  todoInput.setAttribute("placeholder", "Insira sua Próxima Tarefa ! !");

  if(!todoInput.value.trim()){
    // alert("Insira uma Task Válida !");
    todoInput.classList.replace('input-field', 'input-field-alert');
    todoInput.setAttribute("placeholder", "INSIRA UMA TASK VÁLIDA !");
    return;
  }
    
    yarraDosItens.push({
      task: todoInput.value,
      status: false,
    });
    
    todoInput.value = "";
    
    mostrarTarefas();
  
}

function deleteAllTasks() {
  yarraDosItens.splice(0, yarraDosItens.length);

  mostrarTarefas();
  // mostrarHistorico();
};

function doneTask(index) {
  yarraDosItens[index].status = !yarraDosItens[index].status;

  mostrarTarefas();
}

function deleteTask(index) {
  // yarraDosItens.splice(index, 1);
  const [removedItem] = yarraDosItens.splice(index, 1);
  yarraDoAside.push(removedItem);

  // console.table(yarraDoAside);
  mostrarTarefas();
  mostrarHistorico();
}

function reloadStorage() {
  const yarraLocalStorage = localStorage.getItem("lista");
  const yarraLocalStorageHistory = localStorage.getItem("History");

  if (yarraLocalStorage && yarraLocalStorageHistory) {
    yarraDosItens = JSON.parse(yarraLocalStorage);
    yarraDoAside = JSON.parse(yarraLocalStorageHistory);
  }

  mostrarTarefas();
  mostrarHistorico();
}

function deleteAllHistory(){
  console.log('to aqui')
  yarraDoAside.splice(0, yarraDoAside.length);
  mostrarHistorico();
}

reloadStorage();

butaoInsertTask.addEventListener("click", jogarItensNoArrayPrincipal);