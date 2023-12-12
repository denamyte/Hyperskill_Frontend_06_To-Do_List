function init() {
    loadTasks()
    document.getElementById("add-task-button")
        .addEventListener("click", addButtonClick);
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    for (const task of tasks) {
        addTask(...Object.values(task), false);
    }
}

function saveTasks() {
    let lis = document.querySelectorAll('#task-list li');
    const tasks = [];
    for (const li of lis) {
        tasks.push({
            done: li.children[0].checked,
            text: li.children[1].innerText,
        });
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addButtonClick(ev) {
    let inp = document.getElementById("input-task");
    addTask(false, inp.value, true);
    inp.value = "";
    inp.focus();
}

/**
 * @param {boolean} done
 * @param {string} text
 * @param {boolean} save
 */
function addTask(done, text, save) {
    const li = document.createElement('li');

    const chb = document.createElement('input');
    chb.className = 'check';
    chb.type = 'checkbox';
    chb.checked = done;

    const span = document.createElement('span');
    span.className = 'task';
    span.innerText = text;
    if (done) span.classList.add('done');

    assignMarkDoneEvent(chb, span);

    const btn = document.createElement('button');
    btn.className = 'delete-btn';
    btn.innerText = 'x';
    assignRemoveTaskEvent(btn)

    li.append(chb, span, btn);
    document.getElementById('task-list').append(li);

    if (save) saveTasks()
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
        saveTasks()
    });
}

/**
 * @param {HTMLButtonElement} btn
 */
function assignRemoveTaskEvent(btn) {
    btn.addEventListener('click', ev => {
        ev.target.parentNode.remove();
        saveTasks();
    });
}

init();
