'use stric'
///////////global////////////////////////////////
////////////////////////////////////////////////
let formeEl = document.getElementById('myform');

let tableEL= document.getElementById('mytable');

let books =[];
let taplearray =['bookname','Bookpagee','Prise'];

//////structure/////
function Addbook(bookname,prise) {
    this.bookname1=bookname;
    this.prise1=prise;
    this.bookpages=random();

    books.push(this);
}












////////////functions////////////////
/////////////////////////////////////

Addbook.prototype.rendartable=function () {
    let trEl = document.createElement('tr');
    let tdEl1= document.createElement('td');
    let tdEl2= document.createElement('td');
    let tdEl3= document.createElement('td');
    tdEl1.textContent= this.bookname1;
    tdEl2.textContent= this.bookpages;
    tdEl3.textContent= this.prise1;
    trEl.appendChild(tdEl1);
    trEl.appendChild(tdEl2);
    trEl.appendChild(tdEl3);
    tableEL.appendChild(trEl)
    
}




function random() {
    return Math.floor(Math.random() * (500 - 1) + 1);
    
}



function renderheadtable() {
    let rawheadEl = document.createElement('tr');
    for (let i = 0; i < taplearray.length; i++) {
        let thEl= document.createElement('td');
        thEl.textContent=taplearray[i];
        rawheadEl.appendChild(thEl);
        
    }
    tableEL.appendChild(rawheadEl)
    
}





function redform(event) {
    event.preventDefault();
    let nam2 = event.target.bname.value;
    let prise2 = event.target.price.value;
     let newbook =new Addbook(nam2,prise2);

     newbook.rendartable();
     localStorage.setItem('book', JSON.stringify(books));


    // alert('hi')
    
}



function rerender() {
    for (let i = 0; i < books.length; i++) {
        let trEl = document.createElement('tr');
    let tdEl1= document.createElement('td');
    let tdEl2= document.createElement('td');
    let tdEl3= document.createElement('td');
    tdEl1.textContent= books[i].bookname1;
    tdEl2.textContent= books[i].bookpages;
    tdEl3.textContent= books[i].prise1;
    trEl.appendChild(tdEl1);
    trEl.appendChild(tdEl2);
    trEl.appendChild(tdEl3);
    tableEL.appendChild(trEl)
        
        
    }
    
}


function renderfromlocal() {
    let retrievedObject = localStorage.getItem('book');
    let normalobject=JSON.parse(retrievedObject);
// console.log(normalobject);
    if (normalobject !== null) {
        books=normalobject;
        rerender()
        
    }
}






////////////////////////calfunction////////////////
formeEl.addEventListener('submit',redform);
renderheadtable();
renderfromlocal()