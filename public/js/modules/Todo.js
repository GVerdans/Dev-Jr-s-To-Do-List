export default class Todo {
    constructor(list, elementOutput) {
        this.list = list;
        this.elementOutput = elementOutput;
    }

    addToList(task) {
        this.list.push(task);

        this.renderList();
    }

    removeTask(index) {
        this.list.splice(index, 1);
        this.renderList();
    }

    doneTask(p){
        p.classList.toggle("text-decoration-line-through");
        p.classList.toggle("text-danger");
    }

    renderList() {
        this.elementOutput.innerHTML = "";
        this.list.forEach((task, index) => {
            this.elementOutput.innerHTML += `
                <li class="list-group-item d-flex align-items-center" id="${index}">
                <p class="mb-0 p-task">${task}</p> 
                
                    <div class="ms-auto">
                        <button type="button" class="btn btn-outline-success align-end btn-done-task" id="${index}">
                            &#10003;
                        </button>

                        <button type="button" class="btn btn-outline-danger align-end btn-remove-task fw-bold" id="${index}">
                            x
                        </button>
                    </div>
                </li>
            `
        });
    }

}