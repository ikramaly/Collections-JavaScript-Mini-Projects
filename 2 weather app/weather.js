const apiKey = "d044bf9dbb3be3ac2bf223befeec60ef";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
let searchButton = document.querySelector(".search button");
let weatherIcons = document.querySelector(".sun-image img");



async function checkWeather(value) {
    
    let response = await fetch(apiURL+value+`&appid=${apiKey}`);
    // For Invalid city name ;
    if(response.status == 404){
        document.querySelector(".error p").style.display="block";
        document.querySelector(".weather-app-info").style.display="none";
    }else{
        let data = await response.json();
        console.log("Data : ",data);     
        document.querySelector("h1").innerHTML=`${Math.floor(data.main.temp)}°C`;
        document.querySelector("h2").innerHTML=data.name;  
        document.querySelector(".humidity-logo p").innerHTML=`${data.main.humidity}% <br> humidity`;  
        document.querySelector(".wind-logo p").innerHTML=`${data.wind.speed} km/h <br> wind speed`;  

        // change weather logo according to the weather temp.
        if(data.weather[0].main == "Clouds"){
            weatherIcons.src = "images/cloudlogo.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcons.src = "images/clearweather.png";
        }else if(data.weather[0].main == "Fog"){
            weatherIcons.src = "images/foglogo.png";
        }else if(data.weather[0].main == "Snow"){
            weatherIcons.src = "images/snowlogo.png";
        }
        document.querySelector(".error p").style.display="none";
        document.querySelector(".weather-app-info").style.display="block";
        
    };
};

// addEventListner for serach button
searchButton.addEventListener("click" , (event)=>{
    checkWeather(searchBox.value);
});

    