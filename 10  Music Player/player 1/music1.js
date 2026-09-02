let pausePlayBtn = document.querySelector(".pause-play");
let icon = document.querySelector(".pause-play i")
let progress = document.getElementById("progress");
let song = document.getElementById("song");
// let ctrlButtons = document.querySelector

// for the metadata of the song
song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

pausePlayBtn.addEventListener(("click"),(e)=>{
    if(icon.classList.contains("fa-pause")){
        song.pause();
        icon.classList.remove("fa-pause")
        icon.classList.add("fa-play");
    }else{
        song.play();
        icon.classList.add("fa-pause");
        icon.classList.remove("fa-play")
    };
});

//for the song timing update in real time 
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500)
}
// for change the real time 
progress.onchange = function (){
    song.play();
    song.currentTime = progress.value;
    icon.classList.add("fa-pause");
    icon.classList.remove("fa-play")
}


