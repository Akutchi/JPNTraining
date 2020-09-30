var charList= [
    {name: "a", char:"あ"},
    {name: "i", char:"い"},
    {name: "u", char:"う"},
    {name: "e", char:"え"},
    {name: "o", char:"お"},
    {name: "ka", char:"か"},
    {name: "ki", char:"き"},
    {name: "ku", char:"く"},
    {name: "ke", char:"け"},
    {name: "ko", char:"こ"}
];

var xhr = new XMLHttpRequest();
xhr.open('GET', '/katana.txt', true);

// If specified, responseType must be empty string or "text"
xhr.responseType = 'text';

xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            xhr.responseText.split("\n");
            console.log(xhr);
        }
    }
};

xhr.send(null);

/*
Next code is for false random to stop getting the sames symbols
*/
var remainingCharList = [];
function getRandomChar(){
    if(remainingCharList.length == 0)
        remainingCharList = charList.slice(0);//Copy charList
    
    var i = Math.floor(Math.random()*remainingCharList.length);
    return remainingCharList.splice(i, 1)[0];
}

//useless for me
function getImgLink(character){
    return "./img/Hiragana_" + character +"_stroke_order_animation.gif"
}

function askForCustom(){
    charList = JSON.parse(prompt("Custom Json List"));
    remainingCharList = [];
}
