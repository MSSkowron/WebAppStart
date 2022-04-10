//Categories -> trzyma obiekty posiadające name oraz products. Gdzie name to string będący nazwą kategorii, products to lista stringów będących nazwami produktów.
let categories = new Array;
// shopList -> sekcjaGłówna naszej strony. Do niej będziemy dodawać nasze produkty, gdy zostaną wybrane z listy.
let shopList = document.querySelector("#toBuy");
// myFuncCat -> Jesli kategoria ma checkbox.checked to wyświetlamy listę    produktów, jeśli nie jest checked to ukrywamy.
function myFuncCat(){
    if(this.checked===true){
        let toDisplay = this.parentNode.querySelector('.products');
        toDisplay.style.display='block';
    }else{
        let toDisplay = this.parentNode.querySelector('.products');
        toDisplay.style.display='none';
    }
}
// myFuncCat -> Jeśli produkt jest checked to dodajemy go do listy toBuy jeśli unchecked to usuwamy go z listy.
function myFuncProd(){
    if(this.checked===true){
        let li = document.createElement('li');
        li.innerText = this.parentNode.lastChild.innerText;
        shopList.appendChild(li);
    }
    else{
        let children = shopList.childNodes;
        for(let child of children){
            if(child.innerText===this.parentNode.lastChild.innerText){
                shopList.removeChild(child);
                break;
            }
        }
    }
}
// Wyświetlamy listę categories na stronie.
function display(categories){
    let item = document.querySelector(".item")
    let toRemove = item.lastChild;

    let newMainList=document.createElement('ul');
    newMainList.className="main__list";

    for(let category of categories){
        if(category.products.length > 0){
                
            let li = document.createElement('li');
            li.className="category";
            let input = document.createElement('input');
            input.type='checkbox';
            input.id="categoryName";
            input.name="cate";
            let label = document.createElement('label');
            label.for="cate";
            label.innerText=category.name;

            let ulc = document.createElement('ul');
            ulc.className="products";

            for (product of category.products){
                let lic = document.createElement('li');
                lic.className="product";

                let input2 = document.createElement('input');
                input2.type='checkbox';
                input2.id="productName";
                input2.name="prode";
                let label2 = document.createElement('label');
                label2.for="prode";
                label2.id="ppp"
                label2.innerText=product;

                ulc.appendChild(lic);
                lic.appendChild(input2);
                lic.appendChild(label2);
                input2.addEventListener('click',myFuncProd);
                
            }
            li.appendChild(input);
            li.appendChild(label);
            li.appendChild(ulc);
            newMainList.appendChild(li);
            input.addEventListener('click',myFuncCat);
            
        }
    }
    item.removeChild(toRemove);
    item.appendChild(newMainList);

}
function createBase(data){
    for(let x of data){
        let c = Object.keys(x)[0];//NAZWA KATEGORII
        let p = Object.values(x)[0];//TABLICA PRODUKTÓW KATEGORII
        let found = false;
        for(let cat of categories){
            if (cat.name === c){
                found=true;
                for(pro of p){
                    if(! cat.products.includes(pro.nazwa)){
                        cat.products.push(pro.nazwa);
                    }
                }
            }
        }
        if(!found){
            const cat = new Object();
            cat.name = c;
            cat.products = new Array;
            for (let x of p){
                cat.products.push(x.nazwa);
            }
            categories.push(cat);
        }
    }
    display(categories);
}
fetch('http://localhost:3000/ProduktyA')
.then(response =>{
    response.json().then(data =>{
        createBase(data);
    })
})
fetch('http://localhost:3001/ProduktyB')
.then(response =>{
    response.json().then(data =>{
        createBase(data);
    })
})

fetch('http://localhost:3002/ProduktyC')
.then(response =>{
    response.json().then(data =>{
        createBase(data);
    })
})
