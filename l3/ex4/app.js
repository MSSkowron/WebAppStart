function addElements(children,parent){
    for(const child of children){
        const container = document.createElement('div');
        container.className = "cont"
        const name = document.createElement('div');
        name.innerHTML = child["name"];
        const township = document.createElement('div');
        township.innerHTML = child["township"];
        const province = document.createElement('div');
        province.innerHTML = child["province"];
        const area = document.createElement('div');
        area.innerHTML = child["area"];
        const people = document.createElement('div');
        people.innerHTML = child["people"];
        const dentensity = document.createElement('div');
        dentensity.innerHTML = child["dentensity"];
        container.append(name);
        container.append(township);
        container.append(province);
        container.append(area);
        container.append(people);
        container.append(dentensity);
        parent.append(container);
    }
}


function addElement(child,parent){
    const container = document.createElement('div');
        container.className = "cont"
        const name = document.createElement('div');
        name.innerHTML = child["name"];
        const township = document.createElement('div');
        township.innerHTML = child["township"];
        const province = document.createElement('div');
        province.innerHTML = child["province"];
        const area = document.createElement('div');
        area.innerHTML = child["area"];
        const people = document.createElement('div');
        people.innerHTML = child["people"];
        const dentensity = document.createElement('div');
        dentensity.innerHTML = child["dentensity"];
        container.append(name);
        container.append(township);
        container.append(province);
        container.append(area);
        container.append(people);
        container.append(dentensity);
        parent.append(container);
}
function addElementsPlusCity(children,parent){
    for(const child of children){
        const container = document.createElement('div');
        container.className = "cont"
        const name = document.createElement('div');
        name.innerHTML = child["name"];
        const township = document.createElement('div');
        township.innerHTML = child["township"];
        const province = document.createElement('div');
        province.innerHTML = child["province"];
        const area = document.createElement('div');
        area.innerHTML = child["area"];
        const people = document.createElement('div');
        if(child["people"]>100000){
            name.innerHTML += " City";
        }
        people.innerHTML = child["people"];
        const dentensity = document.createElement('div');
        dentensity.innerHTML = child["dentensity"];
        container.append(name);
        container.append(township);
        container.append(province);
        container.append(area);
        container.append(people);
        container.append(dentensity);
        parent.append(container);
    }
}

function moreOrLess(bigger,smaller,parent){
    const container = document.createElement('div');
    container.className = "cont1";
    const b = document.createElement('div');
    b.innerHTML = "Miast powyżej 80000 mieszkańców jest " + bigger;
    const s = document.createElement('div');
    s.innerHTML = "Miast poniżej 80000 mieszkańców jest " + smaller;

    const result = document.createElement('div');
    if(bigger > smaller){
        result.innerHTML = "Więcej jest miast powyżej 80000 mieszkańców"
    }else if(bigger < smaller){
        result.innerHTML = "Więcej jest miast poniżej 80000 mieszkańców"
    }else{
        result.innerHTML = "Miast poniżej i powyżej 80000 mieszkańców jest tyle samo"
    }
    container.appendChild(b)
    container.appendChild(s)
    container.appendChild(result)
    parent.append(container)
}

function average(children,parent){
    let sum = 0;
    let counter=children.length;
    for(const child of children){
        sum += child["area"];
    }
    let avg = sum/counter;
    const container = document.createElement('div');
    container.className = "cont2";
    const header = document.createElement('div');
    header.innerHTML = "Średnia powierzchnia dla miast z powiatów zaczynajacych się na P wynosi:";
    const result = document.createElement('div');
    result.innerHTML = avg;
    container.appendChild(header);
    container.appendChild(result);
    parent.append(container);
}
// a)
function aFilter(element){
    return element["province"]==="małopolskie"
} 
fetch('http://localhost:3000/cities')
.then(response =>{
    response.json().then(data =>{
        const parent = document.querySelector("#a");
        addElements(data.filter(aFilter),parent);
    })
})

// b) 
function bFilter(element){
    return (element["name"].match(/a/g)||[]).length===2;
}
fetch('http://localhost:3000/cities')
.then(response =>{
    response.json().then(data =>{
        const parent = document.querySelector("#b");
        addElements(data.filter(bFilter),parent);
    })
})

//c
function compare(a,b){
    if ( a["dentensity"] > b["dentensity"]){
        return -1;
      }
      if ( a["dentensity"] < b["dentensity"] ){
        return 1;
      }
      return 0;
}

fetch('http://localhost:3000/cities')
.then(response =>{
    response.json().then(data =>{
        const parent = document.querySelector("#c");
        data.sort(compare);
        addElement(data[4],parent);
        
    })
})

//d
fetch('http://localhost:3000/cities')
.then(response =>{
    response.json().then(data =>{
        const parent = document.querySelector("#d");
        addElementsPlusCity(data,parent);
    })
})

//e
function biggerFunc(element){
    return element["people"]>80000;
}
function smallerFunc(element){
    return element["people"]<80000;
}
fetch('http://localhost:3000/cities')
.then(response =>{
    response.json().then(data =>{
        const parent = document.querySelector("#e");
        const bigger = (data.filter(biggerFunc)).length;
        const smaller = (data.filter(smallerFunc)).length;
        moreOrLess(bigger,smaller,parent);
    })
})

//f
const regB=/^[Pp].*/g;
function townshipStartsWithP(element){
    return element["township"].match(regB);
}
fetch('http://localhost:3000/cities')
.then(response =>{
    response.json().then(data =>{
        const parent = document.querySelector("#f");
        average(data.filter(townshipStartsWithP),parent);
    })
})
