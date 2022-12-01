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
    let important = $("#toggle:checked").val();
    let title = $("#txtTitle").val();
    let description = $("#description").val();
    let dueDate = $("#dueDate").val();
    let category = $("#category").val();
    let priority = $("#priority").val();
    let budget = $("#budget").val();
    //create a new instance of Task (object)
    let task = new Task(important, title, description, dueDate, category, priority, budget);
    console.log(task);
    //console log the instance (object)
}




function init() {
    console.log("I'm working!");
    $("#btnSave").click(saveTask);
    $("#btnToggleDetails").click(toggleDetails);
    // $("#toggle").click(toggleImportant); //Not needed now
}

window.onload = init;

// console log a message when user clicks on the icon

// add and id to the icon
// catch the click event on the icon, (on init fn)
// when the icon is clickedcall a funciton named toggleImportant
// in toggleImportant console log a message