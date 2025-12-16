import Timer from './modules/Timer';
import Todo from './modules/Todo';

// Timer Variables
const timerOutput = document.querySelector('.timer');
const selectTimer = document.querySelector(".select-timer");
let timer = null;

// Todo Variables
let todo = null;
const todoInput = document.querySelector(".inputTxtTask");
const todoOutput = document.querySelector(".ul-todo-output");
let list = [];

document.addEventListener("click", (e) => {
    
    // -- Timer Button -- //
    if (e.target.classList.contains("btn-start-timer")) {
        if (!Number(selectTimer.value)) return;

        if (!timer) {
            timer = new Timer(selectTimer.value, timerOutput);
        }
        timer.start();
    };

    if(e.target.classList.contains("btn-stop")){
        if(!timer) return;
        timer.stop();
    }

    if(e.target.classList.contains("btn-pause")) {
        if(!timer) return;
        timer.pause();
    };
    // -- End of Timer Events -- //

    // --- Todo Events --- //
    if(e.target.classList.contains("btnInsertTask")){
       const task = todoInput.value;
       if(task == "") return;

       const todo = new Todo(task, list, todoOutput);

       todo.addToList();
       todoInput.value = "";
    }

});

// Heard the change in Select Time to update timer.
document.addEventListener("change", () => {
    if(!timer) return;

    timer.stop();
    timer.updateTime(selectTimer.value);
})
