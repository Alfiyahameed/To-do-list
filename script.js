
const addButton = document.getElementById("addTask");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

loadtasks();

function values(){  

   const task = taskInput.value.trim();

    if(task){

      taskElement(task);
    taskInput.value='';
    saveTasks();

    }
    else{
    alert("Enter your do list!");
    }
}

addButton.addEventListener('click',values);

function taskElement(task){
  
  const listItem = document.createElement('li');
  listItem.textContent = task;
  listItem.className = 'items';
  taskList.appendChild(listItem); 

  const deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete";
  deleteButton.className = 'del';
  listItem.appendChild(deleteButton);

  deleteButton.addEventListener('click',()=>{
        taskList.removeChild(listItem);
        saveTasks();
        });
  
}

function saveTasks(){
    let tasks=[];
    taskList.querySelectorAll('li').forEach(items=>{
        tasks.push(items.textContent.replace('Delete','').trim())
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadtasks(){
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(taskElement);
}
