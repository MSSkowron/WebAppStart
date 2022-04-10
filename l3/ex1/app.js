let counter = document.querySelector('#counter')
let onButton = document.querySelector('#on')
let offButton = document.querySelector('#off')
let incButton = document.querySelector('#test')
let count = 0;

function increment(){
    count += 1
    counter.innerText = count;
}
function turnOnInc(){
    incButton.addEventListener('click',increment)
}
function turnOffInc(){
    incButton.removeEventListener('click',increment)
    count = 0
    counter.innerHTML = count;
}

onButton.addEventListener('click',turnOnInc)
offButton.addEventListener('click',turnOffInc)