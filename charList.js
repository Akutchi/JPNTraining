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
