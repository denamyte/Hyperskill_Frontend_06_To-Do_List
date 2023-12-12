function init() {
    ['Task 1', 'Task 2', 'Task 3'].forEach(addTask)

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

    assignMarkDoneEvent(chb, span);

    const btn = document.createElement('button');
    btn.className = 'delete-btn';
    btn.innerText = 'x';
    btn.addEventListener('click', ev => {
        ev.target.parentNode.remove();
    });

    li.append(chb, span, btn);
    document.getElementById('task-list').append(li);
}

/**
 * Assign the change event listener to the checkbox to mark the task as done/undone.
 * @param {HTMLInputElement} chb
 * @param {HTMLSpanElement} sp
 */
function assignMarkDoneEvent(chb, sp) {
    chb.addEventListener('change', ev => {
        if (chb.checked) sp.classList.add('done');
        else sp.classList.remove('done');
    });
}

init();
