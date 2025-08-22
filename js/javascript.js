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

    if (dateInput.value === "") {
        alert("Date can't be empty");
        return
    }

    if (taskInput.value.trim() === "") {
        alert("Task can't be empty");
        return;
    }

    let empty = document.getElementById("empty")
    if (empty) {
        empty.remove()
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
    let button = document.createElement("button");
    button.innerText = "Delete"
    tdActions.appendChild(button)

    button.addEventListener("click", function () {
        row.remove();

        if (body.children.length === 0) {
            body.innerHTML = '<tr id="empty"><td colspan="4" style="text-align:center">No Task Found</td></tr>'
        }
    });

    

    row.appendChild(tdTask);
    row.appendChild(tdDueDate);
    row.appendChild(tdStatus);
    row.appendChild(tdActions);

    body.appendChild(row);

    taskInput.value = "";
    dateInput.value = "";

}); 

deleteButton.addEventListener("click", function () {
    body.innerHTML = '<tr id="empty"><td colspan="4" style="text-align:center">No Task Found</td></tr>'
});

;
let save = [];
let filter = false

filterButton.addEventListener("click", function () {
    let checkboxes = body.querySelectorAll('input[type="checkbox"]')
    
    if (!filter) {
        checkboxes.forEach(cb => {
            if (cb.checked) {
                let a = cb.parentElement.parentElement
                save.push(a);
                a.remove();
            };
        });
        filter = true;
    } else {
        save.forEach(a => {
            body.appendChild(a);
        });
        save = [];
        filter = false
    };
});
