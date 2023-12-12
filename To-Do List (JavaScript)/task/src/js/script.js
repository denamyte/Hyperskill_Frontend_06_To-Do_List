function addStaticTasks() {
    ['Task 1', 'Task 2', 'Task 3'].forEach(addTask)
}

function addListeners() {
    document.getElementById("add-task-button")
        .addEventListener("click", addButtonClick);
}

function addButtonClick(ev) {
    let inp = document.getElementById("input-task");
    addTask(inp.value);
    inp.value = "";
    inp.focus();
}

function addTask(text) {
    const li = document.createElement('li');

    const chb = document.createElement('input');
    chb.className = 'check';
    chb.type = 'checkbox';

    const span = document.createElement('span');
    span.className = 'task';
    span.innerText = text;

    const btn = document.createElement('button');
    btn.className = 'delete-btn';
    btn.innerText = 'x';
    btn.addEventListener('click', ev => {
        ev.target.parentNode.remove();
    });

    li.append(chb, span, btn);
    document.getElementById('task-list').append(li);
}

addStaticTasks();
addListeners();