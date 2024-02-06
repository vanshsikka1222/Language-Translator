/* URL Structure : 
let apiUrl = `https://api.mymemory.translated.net/get?q={enteredText}&langpair={translateFrom}|{translateTo}`;
*/
//Ex: https://api.mymemory.translated.net/get?q=Hello&langpair=en|hi

//BASE URL
const Base_URL = "https://api.mymemory.translated.net/get?q=";

//Selections
const dropDown = document.querySelectorAll(".dropdown-menu select");
const button = document.querySelector("form button");
const message = document.querySelector(".msg");
const enteredText = document.querySelector(".enteredText");
const select = document.querySelector("select");

//We have 2 select ("from" and "to")
for(let select of dropDown) {
    for(langCode in countryCodes) {
        //Creating new HTML tag "option" inside select tag
        let newOpt = document.createElement("option");
        //Assigning 'value' attribute of option tag = language code
        newOpt.value = langCode;
        //console.log(langCode);
        //Assigning innerText of option tag = language
        newOpt.innerText = countryCodes[langCode];
        //Appending all options inside select tag
        select.append(newOpt);

        // For Default selections (from: English)(to: Hindi)
        if(select.name === "FROM" && langCode === "en-GB") {
            newOpt.selected = "selected";
        } else if (select.name === "TO" && langCode === "hi-IN") {
            newOpt.selected = "selected";
        }
    }
}

const from = document.querySelector(".FROM select");
const to = document.querySelector(".TO select");

button.addEventListener("click", (event) => {
    //To prevent default functionality of button on click : Reload Page, Submit
    //We want to remove all defaults and add our own functionality.
    event.preventDefault();
    
    let text = enteredText.value;
    // console.log(text);
    let From = from.value[0] + from.value[1]; //e + n = en
    let To = to.value[0] + to.value[1]; //h + i = hi
    // console.log(From);
    // console.log(To);
    if(!text) return;

    let apiURL = `https://api.mymemory.translated.net/get?q=${text}&langpair=${From}|${To}`;
    fetch(apiURL).then(res => res.json()).then(data => {
        message.innerHTML = 
        `<h1>${data.matches[0].translation}</h1>`;
    });
});

//Adding event listener on Button Click
function changeColor() {
    //Selecting message box
    var messageBox = document.querySelector("form button"); 
    messageBox.style.backgroundColor = "black";
    setTimeout(function() {
        messageBox.style.backgroundColor = "rgb(17, 43, 239)";
    }, 100);
}
//By Vansh Sikka
