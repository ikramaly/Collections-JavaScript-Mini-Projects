let pausePlayBtn = document.querySelector(".pause-play");
let icon = document.querySelector(".pause-play i")

pausePlayBtn.addEventListener(("click"),(e)=>{
    if(icon.className ==="fa-solid fa-play"){
        icon.setAttribute("class", "fa-solid fa-pause");
    }else if(icon.className === "fa-solid fa-pause"){
        icon.setAttribute("class", "fa-solid fa-play");
    }

})