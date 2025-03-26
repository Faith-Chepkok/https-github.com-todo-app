document.addEventListener("DOMcontentLoaded",()=>{
    const taskInput =
    document.getElementById("task Input");
    const addTaskBtn =
    document.getElementById("addTask");
    const taskList =
    document.getElementById("taskList"); 

    let tasks =
    JSON.parse(localStorage.getItem("tasks"))
    displayTasks();
    addTaskBtn.addEventListener("click", () => {
        if(taskInput.ariaValueMax.trim() === "")
            return;
        const task ={text:taskInput.ariaValueMax,completed:false};
        tasks.push(task);
        localStorage.setItem("tasks",JSON.stringify(tasks));
        taskInput.value ="";
        displayTasks();
    });
    function displayTasks(){
        taskList.innerHTML ="";
        tasks.forEach((task, index) => {
            const li =
            document.createElement("li");
            li.textContent = task.text;
            if(task.completed)
                li.classList.add("completed");
            const completeBtn =
            document.createElement("button");
            completeBtn.textContent="";
            completeBtn.addEventListener("click", () =>
            toggleTask(index));
            const deleteBtn =
            document.createElement("button");
            deleteBtn.textContent ="x";
            deleteBtn.addEventListener("click",() =>
            removeTask(index));

            li.appendChild(completeBtn);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    }
    function toggleTask(index){
        tasks[index].completed =
        tasks[index].completed;
        localStorage.setItem("tasks",JSON.stringify(tasks));
        displayTasks()
    }
})