let popUpBox = document.querySelector("#popup");

function openPopup(){
    console.log("submit button clicked.");
    popUpBox.classList.add("open-popup-box");    
}
function closePopup() {
    console.log("Ok Button is clicked.");
    popUpBox.classList.remove("open-popup-box");
}