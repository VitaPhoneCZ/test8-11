let ZMENA = 1
function changeimg(){
    let URL = document.getElementById("input").value
    let IMG = document.getElementById("img")
    IMG.src = URL
    //console.log(URL);
    //console.log(IMG);
    console.log("Změna byla provedena po "+ZMENA)
    ZMENA++
}