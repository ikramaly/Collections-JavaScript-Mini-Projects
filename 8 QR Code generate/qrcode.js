
let inputText = document.querySelector("input");
let QrCodeButton = document.querySelector(".generate-qr-code");
let QRCode = document.querySelector(".qr-code img")
let QRCodeBOx = document.querySelector(".qr-code")


async function QRcodr() {
    let api_url = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputText.value;
    QRCode.src= api_url; 
    QRCodeBOx.style.display = "block"
}

QrCodeButton.addEventListener(("click"),(e)=>{
    if(inputText.value ==""){
        inputText.classList.add("emptyBox");
        inputText.className = "emptyBox";
        setTimeout(() => {
            inputText.classList.remove("emptyBox");
        }, 1000);
    }else if(inputText.value !=""){
        QRcodr();
        inputText.value="";
        inputText.classList.remove("emptyBox");
    }
})