const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event){
    event.preventDefault();
    const newTask = todoInput.value;

    if(newTask === ''){
        alert('Пожалуйста введите сюда текст!');
        return;
    }

    todoInput.value = '';

    addTask(newTask);
})

function addTask(task){

    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = task;
    listItem.appendChild(taskText);

    todoList.appendChild(listItem);
}
