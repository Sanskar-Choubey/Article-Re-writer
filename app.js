//References to the textarea,button and output div

var btnTranslate = document.querySelector(".btn");
var inputField = document.querySelector(".input-field");
var outputField = document.querySelector(".output-field");

//Declaration of some variables for further use

var url = "https://api.funtranslations.com/translate/article_rewrite.json";
var text = inputField.value;

//URL-Generator Function

function urlGenerator(text) {
        return url + "?" + "text=" + inputField.value;
        console.log(generatedUrl);
}

//Error Handler Function

function errorHandler(error) {
        console.log("Some error occured",error);
        alert("The server is down!Sorry for the inconvience");
}

//Function to fetch the URL

function fetchURL() {
        fetch(urlGenerator())
        .then(response => response.json())
        .then(JSON => {
                var translatedText = JSON.contents.translated;
                outputField.innerHTML = translatedText})
        .catch(errorHandler)
}

//Event handler
btnTranslate.addEventListener("click", function btnEventHandler() {
        console.log(fetchURL());     
})

