let createNoteBtn = document.querySelector(".create-note-btn");
let noteSection= document.querySelector(".note-section");
let notesContainer= document.querySelector(".notes-container");

// let deleteNote = document.querySelector(".note-section img");

createNoteBtn.addEventListener(("click"),(e)=>{
    // noteSection.style.visibility = "inherit";
    let inputBox = document.createElement("textarea");
    let img = document.createElement("img");

    inputBox.className = "textarea";
    img.src = "deleteIcon.png";
    inputBox.setAttribute("placeholder","Your notes write here......")
    //now we will append the child into the parent element;
    noteSection.appendChild(inputBox);
    noteSection.appendChild(img);

    saveData();
})
// now addEventListener for the delete the notes.
noteSection.addEventListener(("click"),(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.previousElementSibling.remove();
        e.target.remove();

        saveData();
    }
    else if(e.target.tagName === "textarea"){
        notes = document.querySelector(".textarea");
        notes.forEach(element => {
            element.onkeyup = function(){
                saveData();
            }
        });
    }
})
// for the "Enter" key detect karne ke liye
document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

// for save the data into the local storage 
function saveData(){
    localStorage.setItem("notes", noteSection.innerHTML);
}
// for the show the data on the display.
function showNotes(){
    noteSection.innerHTML = localStorage.getItem("notes");
}
showNotes();