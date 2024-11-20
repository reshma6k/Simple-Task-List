let tasks = [];

const taskInput = document.getElementById('task')
const taskList = document.getElementById('taskList')
const addTask = document.getElementById('btn1')
const removeLastTask = document.getElementById('btn2')
const noTaskMessage = document.querySelector('p') 

function displayTask() {
    taskList.innerHTML = ''; 
    tasks.forEach((task) => {
        const li = document.createElement('li')
        li.classList.add('task-item')
        li.textContent = task
        taskList.appendChild(li)
    });
    if (tasks.length > 0) {
        noTaskMessage.textContent = 'Added Tasks;'
    } else {
        noTaskMessage.textContent = 'No Task added;'
    }

}



addTask.addEventListener('click', function() {
    const taskValue = taskInput.value.trim() 

    if (taskValue) {
        tasks.push(taskValue)
        taskInput.value = ''
        displayTask()
    } else {
        alert('Please enter a task!')
    }
});

removeLastTask.addEventListener('click', function() {
    if (tasks.length > 0) {
        tasks.pop()
        displayTask()
        alert('Last task removed')
    }
});

displayTask();
