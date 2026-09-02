const api_url = "http://api.quotable.io/random";

let quoteContainer = document.querySelector(".quote-container");
let Poem = document.querySelector(".poem");
let authorName = document.getElementById("author-name");
let newQuote = document.querySelector("#new-quote")
let twitter = document.querySelector("#twitter");

console.log("We will fetch the url for random quotes.");
async function getQuote(url) {
    const response = await fetch(api_url);
    let data = await response.json();
    console.log("Data:",data);
    console.log(data.content);
    console.log("author name : ",data.author)

    Poem.innerHTML = data.content;
    authorName.innerHTML = `- ${data.author}`;
}
//first time it will be show automatically.
getQuote();
// now when we will click the new qoute button then new qoute will be the show. 
newQuote.addEventListener(('click'),(e)=>{
    getQuote();
});
// for show the twitter window in the web browser. 
function twitterWindow(){
    window.open("https://twitter.com/intent/tweet?text="+Poem.innerHTML+` ${authorName.innerHTML}`,
        "Tweet Window", "width=600, height=300"
    );
}
twitter.addEventListener(("click"),(e)=>{
    twitterWindow();
})