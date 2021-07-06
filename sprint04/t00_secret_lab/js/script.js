let state = false;

function transformation() {
    if(state === false){
    document.getElementById("hero").innerHTML = "Bruce Banner"
    document.getElementById("hero").style.fontSize = "60px"
    document.getElementById("hero").style.letterSpacing = "2px"
    document.getElementById("lab").style.backgroundColor = "#ffb300"
    state = true;
    return;
}
if(state === true){
    document.getElementById("hero").innerHTML = "Hulk"
    document.getElementById("hero").style.fontSize = "130px"
    document.getElementById("hero").style.letterSpacing = "6px"
    document.getElementById("lab").style.backgroundColor = "#70964b"
    state = false;
    return;
}
}