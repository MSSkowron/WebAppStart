let empList = document.querySelectorAll(".Employee")
let index = 0
let n = empList.length

let nextBtn = document.querySelector(".next")
let prevBtn = document.querySelector(".previous")
let randBtn = document.querySelector(".random")

function nextEmpl(){
    empList[index].style.display="none"
    index = (index + 1) % n 
    empList[index].style.display = "flex"
}
function prevEmpl(){
    empList[index].style.display="none"
    index = index - 1
    if(index === -1){
        index = n-1
    }
    empList[index].style.display="flex"
}
function randomEmpl(){
    empList[index].style.display="none"
    index = Math.floor(Math.random() * n)
    empList[index].style.display="flex"
}
nextBtn.addEventListener('click',nextEmpl)
prevBtn.addEventListener('click',prevEmpl)
randBtn.addEventListener('click',randomEmpl)