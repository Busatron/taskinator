var buttonE1 = document.querySelector("#save-task");
var tasksToDOE1 = document.querySelector("#task-to-do")

var createTaskHandler = function() {
    var taskItemE1 = document.createElement("li");
    listItemE1.classname = "task-item";
    listItemE1,textContent = "This is a new task.";
    tasksToDOE1.appendChild(listItemE1);
};

buttonE1.addEventListener("click", createTaskHandler);

