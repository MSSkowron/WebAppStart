let nValid = document.querySelector("#nameValid")
let pValid = document.querySelector("#phoneValid")

let addNewContact = function () {
    nValid.innerText = ''
    pValid.innerText = ''
    let name = document.getElementById('inputName').value;
    let phone = document.getElementById('inputPhone').value;
    let regName = /^[A-Z]+[a-z]+$/;
    let regPhone = /^\d{9}$/
    if(!regName.test(name)){
        nValid.innerText = "Niepoprawne imię!"
    }else if(!regPhone.test(phone)){
        pValid.innerText = "Niepoprawny numer telefonu!"
    }else{
        let y = document.getElementById('displayContacts')
        let x = document.createElement('li')
        let contactName = document.createElement('p');
        let contactPhone = document.createElement('p');
        let delButton = document.createElement('button')
        contactName.className = 'name'
        contactPhone.classname='phone'
        delButton.className = 'delButton'
        delButton.innerText='Delete Contact!'
        delButton.addEventListener('click',deleteContact,false)
        contactName.appendChild(document.createTextNode(name))
        contactPhone.appendChild(document.createTextNode(phone))
        x.appendChild(contactName)
        x.appendChild(contactPhone)
        x.appendChild(delButton)
        y.appendChild(x)
    }
}

let deleteContact = function () {
    this.parentNode.parentNode.removeChild(this.parentNode)
}
let sbmButton = document.querySelector(".addButton")
sbmButton.addEventListener('click',addNewContact)