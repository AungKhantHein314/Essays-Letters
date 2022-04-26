var introDisplay = document.getElementById("essay-heading");
var bodyDisplay = document.getElementById("essay-body");
var conDisplay = document.getElementById("essay-conclusion");
var title = document.getElementById("heading");
var length = document.getElementById("length");
var marks = document.getElementById("marks");


var url = './essaydata.json';
var req = new XMLHttpRequest()
req.open('GET', url, true);

req.onload = () => {
    data = JSON.parse(req.responseText);
    marks.insertAdjacentText("afterend", data[0].marks);

    let introText = data[0].content.introduction;
    introDisplay.insertAdjacentText("afterend", introText);

    let bodyText = data[0].content.body;
    bodyDisplay.insertAdjacentText("afterend", bodyText);

    let conText = data[0].content.conclusion;
    conDisplay.insertAdjacentText("afterend", conText);
    
    var length2 = introText.split(" ").length + bodyText.split(" ").length + conText.split(" ").length;
    var lengthStr = length2.toString();
    length.innerText = "words: " + lengthStr;
}
req.send();