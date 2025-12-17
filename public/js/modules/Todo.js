export default class Todo {
    constructor(elementOutput) {
        this.elementOutput = elementOutput;
        this.list = this.load();
        this.renderList();
    };

    addToList(task) {
        this.list.push({
            text: task,
            done: false
        });

        this.save();
        this.renderList();
    };

    removeTask(index) {
        this.list.splice(index, 1);
        this.save();
        this.renderList();
    };

    doneTask(index) {
        this.list[index].done = !this.list[index].done;
        this.save();
        this.renderList();
    };

    renderList() {
        this.elementOutput.innerHTML = "";

        this.list.forEach((task, index) => {
            this.elementOutput.innerHTML += `
                <li class="list-group-item d-flex align-items-center" id="${index}">
                <p class="mb-0 p-task ${
                    task.done ? 'text-decoration-line-through text-success' : '' }">${task.text}</p> 
                
                    <div class="ms-auto">
                        <button type="button" class="btn btn-outline-success align-end btn-done-task" data-index="${index}">
                            &#10003;
                        </button>

                        <button type="button" class="btn btn-outline-danger align-end btn-remove-task fw-bold" data-index="${index}">
                            x
                        </button>
                    </div>
                </li>
            `
        });
    };

    save() {
        localStorage.setItem("todoList", JSON.stringify(this.list));
    }

    load() {
        return JSON.parse(localStorage.getItem("todoList")) || [];
    }

}