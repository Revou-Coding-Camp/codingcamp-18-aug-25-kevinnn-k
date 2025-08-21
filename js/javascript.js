let taskInput = document.getElementById("task");
let dateInput = document.getElementById("date");
let addButton = document.getElementById("add");
let filterButton = document.getElementById("filter")
let deleteButton = document.getElementById("deleteall")
let form = document.getElementById("todo")
let body = document.getElementById("body")

form.addEventListener("submit", async function (e) {
    e.preventDefault();
    let task = taskInput.value
    let date = dateInput.value

    let empty = document.getElementById("empty")
    if (taskInput.value) {
        empty.remove()
    }

    if (taskInput.value.trim() === "") {
        alert("Task can't be empty");
        return;
    }

    let row = document.createElement("tr");
    
    let tdTask = document.createElement("td");
    tdTask.innerText = task

    let tdDueDate = document.createElement("td");
    tdDueDate.innerText = date

    let tdStatus = document.createElement("td");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox"
    tdStatus.appendChild(checkbox)

    let tdActions = document.createElement("td");

    row.appendChild(tdTask);
    row.appendChild(tdDueDate);
    row.appendChild(tdStatus);
    row.appendChild(tdActions);

    body.appendChild(row);

    

}); 


    
