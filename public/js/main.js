import Timer from './modules/Timer';
import Todo from './modules/Todo';

// Timer Variables
const timerOutput = document.querySelector('.timer');
const selectTimer = document.querySelector(".select-timer");
let timer = null;
timer = new Timer(selectTimer.value, timerOutput);

// Todo Variables
const todoInput = document.querySelector(".inputTxtTask");
const todoOutput = document.querySelector(".ul-todo-output");
let list = [];
const todo = new Todo(todoOutput);


document.addEventListener("click", (e) => {

    // -- Timer Button -- //
    if (e.target.classList.contains("btn-start-timer")) {
        if (!Number(selectTimer.value)) return;

        timer.start();
    };

    if (e.target.classList.contains("btn-stop")) {
        if (!timer) return;
        timer.stop();
    }

    if (e.target.classList.contains("btn-pause")) {
        if (!timer) return;
        timer.pause();
    };
    // -- End of Timer Events -- //

    // --- Todo Events --- //
    if (e.target.classList.contains("btnInsertTask")) {
        if (todoInput.value == "") return;

        todo.addToList(todoInput.value);
        todoInput.value = "";
    }

    // Remove task
    if (e.target.classList.contains("btn-remove-task")) {
        todo.removeTask(e.target.dataset.index);
    }

    // Task Done
    if (e.target.classList.contains("btn-done-task")) {
        todo.doneTask(e.target.dataset.index);
    }

    // -- End of Todo Events -- //

});

// Heard the change in Select Time to update timer.
document.addEventListener("change", (e) => {
    if (e.target.classList.contains("select-timer")) {
        if (!timer) return;
        timer.stop();
        timer.updateTime(selectTimer.value);
    }

})
