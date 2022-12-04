//Leaving old code in to show I did the work here
// const nonImportantIcon = "fa-regular fa-heart";
// const importantIcon= "fa-solid fa-heart";
var isImportant = false;
var isVisible = true
let important = "⚪"
console.log(important)
//toggling between icons using class
// function toggleImportant() {
//     if (isImportant) {
//         $("#topIcon").removeClass(importantIcon);
//         $("#topIcon").addClass(nonImportantIcon);
//         isImportant = false;
//     }
//     else {
//         $("#topIcon").removeClass(nonImportantIcon);
//         $("#topIcon").addClass(importantIcon);
//         isImportant = true;
//     }
// }

function toggleDetails() {
    if (isVisible) {
        $("#secForm").hide();
        isVisible = false;
    }
    else {
        $("#secForm").show();
        isVisible = true;
    }
}

function saveTask() {
    console.log("saving task...");
    // need to add values for important
    let important = $("#toggle:checked").val() || false;
    let title = $("#txtTitle").val();
    let description = $("#description").val();
    let dueDate = $("#dueDate").val();
    let category = $("#category").val();
    let priority = $("#priority").val();
    let budget = $("#budget").val();

    //create a new instance of Task (object)
    let task = new Task(important, title, description, dueDate, category, priority, budget);
    //console log the instance (object)
    console.log(task);


    //create a post request to:
    $.ajax({
        type: "POST",
        url: "https://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(task),
        contentType: "application/json",
        success: function (data) {
            console.log("Save succeeded", data);
            displayTask(task);
            //http cannot send objects so we'll need to encode it into a string, number, or true/false and current best practice is to use JSON (JS Object Notation)                            
        },
        error: function (error) {
            console.log("Save failed", error);
            alert("Error task not saved");
        },
    });
}


function displayTask(task) {
    let syntax = `
    <div class=active-tasks>
    ⚪
        <div class=task-title>
            <h4>${task.title}</h4>
            <p>${task.description}</p>
        </div>

        <div class=task-items>
            <div>
                <label>${task.dueDate}</label>
                <label>${task.category}</label>
                <label>$${task.budget}</label>
            </div>
    
            
            <button class="btn btnRemove" onclick="btnRemove()">Task Completed</button>
        </div>
    </div>
    `;

    $("#pendingTasks").append(syntax);
}

// function btnRemove() {
//     console.log("Start of btnRemove function"),
//         console.log("Removing")
//     let delRequest = $.ajax({
//         url: "https://fsdiapi.azurewebsites.net/api/tasks",
//         type: "REMOVE",
//         dataType: 'json',
//         data: person,

//         success: function (delRequest, data) {
//             console.log("Data during", data);
//         },
//         error: function () {
//             console.log("Request error: ", error);
//         }
//     });
// }


//to test this function execute testRequest(); directly in console
// it will return the data or error info
function testRequest() {
    $.ajax({
        type: "GET",
        url: "https://fsdiapi.azurewebsites.net/api/tasks",
        success: function (data) {
            console.log("Server says", data);
        },
        error: function () {
            console.log("Request error: ", error);
        }
    });
}

function fetchTasks() {
    //send a get request:
    $.ajax({
        type: "GET",
        url: "https://fsdiapi.azurewebsites.net/api/tasks",
        success: function (data) {
            let all = JSON.parse(data); //parses the JSON string inot JS Object/Arrray
            //all = the the tasks saved on the server 

            for (let i = 0; i < all.length; i++) {
                let task = all[i];
                //if the task name is equal to my name then display them 
                if (task.name === "James") {
                    displayTask(task);
                }
            }
        },
        error: function () {
            console.log("Request error: ", error);
        }
    });
}

function init() {
    fetchTasks();
    $("#btnSave").click(saveTask);
    $("#btnToggleDetails").click(toggleDetails);
}

window.onload = init;

// console log a message when user clicks on the icon

// add and id to the icon
// catch the click event on the icon, (on init fn)
// when the icon is clickedcall a funciton named toggleImportant
// in toggleImportant console log a message


// send a delete request to
// https://fsdiapi.azurewebsites.net/api/tasks/clear/<name>
