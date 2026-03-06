let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentFilter = "all";

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");
const taskCounter = document.getElementById("taskCounter");
const loading = document.getElementById("loading");
const filterButtons = document.querySelectorAll(".filters button");

addTaskBtn.addEventListener("click", () => {

    const text = taskInput.value.trim();

    if(text === "") return;

    tasks.push({
        text: text,
        completed: false
    });

    taskInput.value = "";

    saveTasks();
    renderTasks();

});

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(){

    loading.style.display = "block";
    taskList.innerHTML = "";

    setTimeout(() => {

        loading.style.display = "none";

        let filteredTasks = tasks;

        if(currentFilter === "completed"){
            filteredTasks = tasks.filter(task => task.completed);
        }

        if(currentFilter === "pending"){
            filteredTasks = tasks.filter(task => !task.completed);
        }

        if(filteredTasks.length === 0){
            emptyMessage.style.display = "block";
        }else{
            emptyMessage.style.display = "none";
        }

        filteredTasks.forEach((task,index) => {

            const li = document.createElement("li");

            if(task.completed){
                li.classList.add("completed");
            }

            li.innerHTML = `
                <span>${task.text}</span>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;

            li.dataset.index = index;

            taskList.appendChild(li);

        });

        updateCounter();

    },1000);

}

function updateCounter(){
    taskCounter.textContent = "Tasks: " + tasks.length;
}

taskList.addEventListener("click", (e) => {

    const index = e.target.closest("li")?.dataset.index;

    if(index === undefined) return;

    if(e.target.classList.contains("delete-btn")){
        tasks.splice(index,1);
        saveTasks();
        renderTasks();
        return;
    }

    tasks[index].completed = !tasks[index].completed;

    saveTasks();
    renderTasks();

});


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        currentFilter = button.dataset.filter;

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        renderTasks();

    });

});

document.querySelector('[data-filter="all"]').classList.add("active");

renderTasks();


//1. How does your application manage state?

//It uses a tasks array to store each task’s text and completion status, 
// updating the array whenever tasks are added, deleted, or toggled. 
// LocalStorage keeps tasks persistent.

//2. Why is renderTasks() necessary?

// It updates the UI to match the tasks array after any change, 
// ensuring the DOM reflects the current state.

//3. What is event delegation and why is it efficient?

//A single listener on the parent <ul> handles all clicks. 
// Efficient because it reduces listeners and works for dynamically created tasks.

//4. What happens if you manipulate the DOM but not the state?

//The UI becomes inconsistent, and changes may disappear when re-rendered or 
// the page reloads.