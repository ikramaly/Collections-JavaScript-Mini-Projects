let passBox = document.getElementById("password");
let genPassButton = document.querySelector(".password-btn");
let paraTag = document.querySelector("p");
let copyPassword = document.querySelector(".copy-button");
const length = 12; 

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";

const number = "01234567889";
const symbols = "!@#$%^&*()_+|{}[]></-=";

const allChar = upperCase + lowerCase + number + symbols;

alert(`Welcome to the "Random Generate Password Poject" `);

function createRandomPass(){
    // I am using while loop here for better understanding. 
    let password = "";
    // password += upperCase[Math.floor(Math.random() * upperCase.length) ];
    // password += lowerCase[Math.floor(Math.random() * lowerCase.length) ];
    // password += number[Math.floor(Math.random() * number.length) ];
    // password += symbols[Math.floor(Math.random() * symbols.length)];
    // // console.log("password : ",password , "length : ", password.length);

    while (length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passBox.value = password;
    paraTag.innerHTML = "";

}

genPassButton.addEventListener("click",function(e){
    createRandomPass();
})

// for copy the password 

function passwordCopy(){
    passBox.select();
    document.execCommand("copy");
}

copyPassword.addEventListener(("click"),(e)=>{
    passwordCopy();
    paraTag.classList.add("copy-password");
    paraTag.innerHTML="Password Copied Successfully!";
})
