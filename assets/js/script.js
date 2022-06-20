var formE1 = document.querySelector("#task-form");
var tasksToDOE1 = document.querySelector("#task-to-do")

var createTaskHandler = function(event) {

    event.preventDefault();

    var taskItemE1 = document.createElement("li");
    listItemE1.classname = "task-item";
    listItemE1,textContent = "This is a new task.";
    tasksToDOE1.appendChild(listItemE1);
};

formE1.addEventListener("submit", createTaskHandler);

