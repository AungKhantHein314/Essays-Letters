let essayNames = [];
let letterNames = [];

let essays = document.getElementById("essays");
function essayRender(Name) {
    let Output = "";
    for(let i = 0; i < Name.length; i++){
        Output += "<li>" + Name[i] + "</li>"
    }
    essays.insertAdjacentHTML("beforeend", Output);
}

let letters = document.getElementById("letters");
function letterRender(Name) {
    let Output = "";
    for(let i = 0; i < Name.length; i++){
        Output += "<li>" + Name[i] + "</li>"
    }
    letters.insertAdjacentHTML("beforeend", Output);
}
letterRender(letterNames);

// DATA DATA DATA DATA DATA

var data;
var essays2;
var url = './data.json';
var req = new XMLHttpRequest()
req.open('GET', url, true);

req.onload = () => {
    data = JSON.parse(req.responseText)
    essays2 = data.essays2;
    for(let i = 0; i < essays2.length; i++){
        essayNames.push(essays2[i])
    }
    essayRender(essayNames);
    
    letters2 = data.letters2;
    for(let i = 0; i < letters2.length; i++){
        letterNames.push(letters2[i])
    }
    letterRender(letterNames);
}
req.send();

// EXTERNAL FUNCTION 
    let essayRandom = () => {
        let essayNum = essayNames.length;
        let essayOutputNum = Math.floor(Math.random() * essayNum);
        let essayOutput = document.getElementById('randomEssay')
        essayOutput.innerHTML = essayNames[essayOutputNum]
    }
    
    let letterRandom = () => {
        let letterNum = letterNames.length;
        let letterOutputNum = Math.floor(Math.random() * letterNum);
        let letterOutput = document.getElementById('randomLetter')
        letterOutput.innerHTML = letterNames[letterOutputNum]
    }
