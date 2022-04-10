let baloon = document.querySelector("#bl")
let infoMenu = document.querySelector("#info")
document.addEventListener('keydown',checkKey)
baloon.addEventListener('mousedown',menuFun)

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        infoMenu.classList.remove("activeMenu");
        infoMenu.innerHTML="";
        let style = window.getComputedStyle(baloon, null).getPropertyValue('font-size');
        let fontSize = parseFloat(style); 
        if(fontSize + 0.1*fontSize < 300){
            baloon.style.fontSize = (fontSize + 0.1*fontSize) + 'px';
        }
        else{
            baloon.innerText="💥"
            baloon.style.fontSize = 300 + "px"
        }
    }
    else if (e.keyCode == '40') {
        infoMenu.classList.remove("activeMenu");
        infoMenu.innerHTML="";
        let style = window.getComputedStyle(baloon, null).getPropertyValue('font-size');
        let fontSize = parseFloat(style); 
        if(fontSize<300 && ((fontSize - 0.1*fontSize) >= 40)){
            baloon.style.fontSize = (fontSize - 0.1*fontSize) + 'px';
        }else if((fontSize - 0.1*fontSize) <40){
            infoMenu.className="activeMenu"
            infoMenu.innerHTML="Nie można spuścić powietrza, bo balonik pęknie!"
            infoMenu.style.color="#EE1A1A";
        }
    }
}
function menuFun(e){
    if(e.button===2 && e.ctrlKey){
        let style = window.getComputedStyle(baloon, null).getPropertyValue('font-size');
        let fontSize = parseFloat(style); 
        infoMenu.className="activeMenu"
        if(baloon.innerHTML==="💥"){
            infoMenu.innerHTML="Nastąpiła ekspolzja!"
        }
        else{
            infoMenu.innerHTML="Balonik jest w dobrym stanie! <br> Jego rozmiar to: "+fontSize+"px."
        }
        infoMenu.style.color="black"
    }
}
