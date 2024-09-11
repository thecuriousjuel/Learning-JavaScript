// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)

// Functions

function addTodo(event) {
    event.preventDefault();
    if (!todoInput.value) {
        alert('No value entered')
        return
    }

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoList.appendChild(todoDiv)

    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"> </i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"> </i>'
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoInput.value = '';
}

function deleteCheck(event) {
    const item = event.target;
    console.log(item.classList);
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }

    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}

function filterTodo(event) {
    const todos = todoList.childNodes;
    const eventType = event.type;
    const targetElement = event.target;
    const parentElement = targetElement.parentNode;
    // console.log("Event type:", eventType);
    // console.log("Target element:", targetElement);
    // console.log("Parent element:", parentElement);
    // console.log(`todos=${todos} ${typeof todos}`)
    todos.forEach(function (todo) {
        if (todo.nodeType !== Node.ELEMENT_NODE){
            return
        }
        // console.log(`todo=${todo}`);
        switch (event.target.value) {
            case "all":
                todo.style.display = 'flex';
                break
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                }
                else {
                    todo.style.display = 'none';
                }
                break
            default:
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex'
                }
                else{
                    todo.style.display = 'none';
                }
        }
    });
}



