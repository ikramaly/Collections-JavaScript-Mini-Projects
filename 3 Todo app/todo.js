let takeInput = document.querySelector(".add-task input");
let button = document.querySelector(".add-task button");
let taskList = document.querySelector(".task-list ul");
// let li = document.querySelector("li");

function newTask(value) {
    if(takeInput.value === ''){
        alert("You must write something!");
        saveData();
    }else{
        let newList = document.createElement("li");
        newList.innerText = takeInput.value;
        taskList.appendChild(newList);
        takeInput.value ='';
        let span= document.createElement("span");
        span.innerHTML = "X";
        newList.appendChild(span);
        saveData();
    } 
};
taskList.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// this function for the storage of the data 

function saveData(){
    localStorage.setItem("data",taskList.innerHTML);
}
function showList(){
    taskList.innerHTML = localStorage.getItem("data");
}
showList();