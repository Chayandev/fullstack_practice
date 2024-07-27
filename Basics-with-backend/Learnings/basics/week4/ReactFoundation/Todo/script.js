const addBtn = document.getElementsByName("add")[0];
const titleField = document.getElementById("title");
const descriptionField = document.getElementById("description");
const todo_container = document.getElementById("todo-container");
let globaltodoId = 0;

function markasdone(todoId) {
    const parent = document.getElementById(todoId);
    parent.children[2].innerHTML = "Done!"
}

function createChild(title, description, id) {
    const child = document.createElement("div");
    const firstGrandParent = document.createElement("div");
    const secondGrandParent = document.createElement('div');
    const thirdGradnParent = document.createElement("button");
    firstGrandParent.innerHTML = title
    secondGrandParent.innerHTML = description
    thirdGradnParent.innerHTML = "Mark as Done";
    thirdGradnParent.setAttribute("onClick", `markasdone(${id})`)
    child.appendChild(firstGrandParent);
    child.appendChild(secondGrandParent);
    child.appendChild(thirdGradnParent);
    child.setAttribute("id", id);
    child.setAttribute("class", "todo");

    return child;
}
function appendTodoBottom(title, description) {
    if (title.toString() === "" || description.toString() === "")
        return 0;
    //document.createEment
    todo_container.appendChild(createChild(title, description, globaltodoId++))
    //one-way
    /*
    todo_container.innerHTML = todo_container.innerHTML + `
           <div>
            <div>${title}</div>
            <div>${description}</div>
            <button>Mark Done</button>
           </div>
   `;
   */
}

function updateDomAccToState(state) {
    todo_container.innerHTML = "";
    for (let i = 0; i < state.length; i++) {
        const child = createChild(state[i].title, state[i].description, state[i].id)
        todo_container.appendChild(child);
    }
}

window.setInterval(async () => {
    const res = await fetch("https://sum-server.100xdevs.com/todos");
    const json = await res.json();
    updateDomAccToState(json.todos);
}, 5000)

function addTodo() {
    const title = titleField.value;
    const desc = descriptionField.value;

    console.log(`${title} & ${desc}`);
    appendTodoBottom(title, desc); // Corrected here
}

addBtn.addEventListener('click', () => {
    addTodo();
});
