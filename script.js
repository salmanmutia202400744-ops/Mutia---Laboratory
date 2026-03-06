let tasks = [];

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

addTaskBtn.addEventListener("click", function(){

    const text = taskInput.value.trim();

    if(text === "") return;

    tasks.push({
        text: text,
        completed: false
    });

    taskInput.value = "";

    renderTasks();

});


function renderTasks(){

    taskList.innerHTML = "";

    if(tasks.length === 0){
        emptyMessage.style.display = "block";
        return;
    }

    emptyMessage.style.display = "none";

    tasks.forEach((task,index)=>{

        const li = document.createElement("li");

        if(task.completed){
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span class="task-text">${task.text}</span>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;

        li.dataset.index = index;

        taskList.appendChild(li);

    });

}


taskList.addEventListener("click", function(e){

    const index = e.target.closest("li")?.dataset.index;

    if(index === undefined) return;

    // Delete task
    if(e.target.classList.contains("delete-btn")){
        tasks.splice(index,1);
        renderTasks();
        return;
    }

    // Toggle completed
    tasks[index].completed = !tasks[index].completed;

    renderTasks();

});


renderTasks();