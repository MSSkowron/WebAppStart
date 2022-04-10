let counter = 0
let isOn = true;
let sum = document.querySelector("#sum")
let info = document.querySelector("#info")
//DIVY
let grey = document.querySelector("#One")
let red = document.querySelector("#Two")
let yellow = document.querySelector("#Three")
//BUTTONS
let resetButton = document.querySelector("#reset-btn")
let propagationButton = document.querySelector("#propagation-btn")
//FUNKCJE
function yellowClicked( e ){
    if (counter > 50){
        yellow.removeEventListener('click',yellowClicked)
    }
    else{
        info.innerHTML = "Nacisnąłeś żółty o wartości 5!" +"<br>"
        counter += 5
        sum.innerText = "Suma: " + counter
    }
    if(isOn === false){
        e.stopPropagation();
    }
}
function redClicked( e ){
    if (counter > 30){
        red.removeEventListener('click',redClicked)
    }
    else{
        if(e.target.id==this.id){
            info.innerHTML = "Nacisnąłeś czerwony o wartości 2!" + "<br>"
        }
        else{
            info.innerHTML += "Nacisnąłeś czerwony o wartości 2!" + "<br>"
        }
        counter += 2
        sum.innerText = "Suma: " + counter
    }
    if(isOn === false){
        e.stopPropagation();
    }
}
function greyClicked( e ){
    if(e.target.id==this.id){
        info.innerHTML = "Nacisnąłeś niebieski o wartości 1!" + "<br>"
    }
    else{
        info.innerHTML += "Nacisnąłeś niebieski o wartości 1!" + "<br>"
    }
    counter += 1
    sum.innerText = "Suma: " + counter
    if(isOn === false){
        e.stopPropagation();
    }
}
function resetGame(){
    if(counter > 50){
        red.addEventListener('click',redClicked)
        yellow.addEventListener('click',yellowClicked)
    }
    else if(counter > 30){
        red.addEventListener('click',redClicked)
    }
    counter = 0
    sum.innerText = "Suma: " + counter
    info.innerText =""
    
}
function changePropagation(){
    if(isOn){
        isOn = false;
        propagationButton.innerText = "START PROPAGATION"
    }else{
        isOn = true;
        propagationButton.innerText = "STOP PROPAGATION"
    }
}

//EVENTY
grey.addEventListener('click',greyClicked)
red.addEventListener('click',redClicked)
yellow.addEventListener('click',yellowClicked)
resetButton.addEventListener('click',resetGame)
propagationButton.addEventListener('click',changePropagation)
