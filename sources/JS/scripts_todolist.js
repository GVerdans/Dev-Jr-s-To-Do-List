"use strict";

const todoInput = document.getElementById("ipt-txt-todo");
const butaoInsertTask = document.querySelector("#btn-insert-task");
const btnDeleteAll = document.querySelector("button.btn-delete-all-tasks");
const ulDasLi = document.querySelector("ul.tasks");
const butaoDeleteTask = document.getElementById("btn-task-delete");
let yarraDosItens = [];

function jogarItensNoArray() {
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
}

function doneTask(index) {
  yarraDosItens[index].status = !yarraDosItens[index].status;

  mostrarTarefas();
}

function mostrarTarefas() {
  let newLi = "";
  yarraDosItens.forEach((item, index) => {
    // Valores padrão do forEach (valor atual, index, array completo(no caso não usado));
    newLi += `<li class="task-li-${item.status && "done"}">
        ${item.task}
        <input type="button" value="&check;" class="btn-task" id="btn-task-done" title="Done" onclick="doneTask(${index})">
        
        <input type="button" value="X" class="btn-task" id="btn-task-delete" title="Delete" onclick="deleteTask(${index})">
        </li>`;
  });

  ulDasLi.innerHTML = newLi;
  // console.table(yarraDosItens);

  localStorage.setItem("lista", JSON.stringify(yarraDosItens));
}

function deleteTask(index) {
  yarraDosItens.splice(index, 1);
  mostrarTarefas();
}

function reloadStorage() {
  const yarraLocalStorage = localStorage.getItem("lista");

  if (yarraLocalStorage) {
    yarraDosItens = JSON.parse(yarraLocalStorage);
  }

  mostrarTarefas();
}

reloadStorage();

butaoInsertTask.addEventListener("click", jogarItensNoArray);
