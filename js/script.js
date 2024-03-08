let btn = document.querySelector("#search-btn");
let thing = document.querySelector(".search-bar");
//let mylist = document.querySelector(".mylist");

const searchInput = document.querySelector("#searchInput");
const myButton = document.querySelector("#myButton");
const list = document.querySelector("#list");
const items = document.querySelector(".class");

btn.addEventListener('click', () => {
    let newthing = thing.value;
    console.log(newthing);
    let item = document.createElement("li");
    item.classList.add("item");
    let cross = document.createElement("button");
    cross.classList.add("cross");
    let text = document.createElement("button");
    text.classList.add("text");
    item.appendChild(text)
    item.appendChild(cross);
    list.appendChild(item);
    text.textContent = newthing;
    cross.style.content = url("img/icons/cross.png");
    //return false;
    if (items.indexOf(item) % 2 == 0) {
        th.style.backgroundColor = "white";

    } else {
        th.style.backgrounColor = "grey";
    }


})

let item = document.querySelector(".item");
let text = document.querySelector(".text");
let cross = document.querySelector(".cross");



text.addEventListener('click', () => {
    if (text.style.textDecoration = line-through) {
    text.style.textDecoration = none;
    } else {
        text.style.textDecoration = line-through;
    }
   
})
/*
text.addEventListener('touchstart', () => {
    if (text.style.textDecoration = line-through) {
    text.style.textDecoration = none;
    } else {
        text.style.textDecoration = line-through;
    }
   
})
*/
cross.addEventListener('click', () => {
    cross.parentElement.style.display = none;
})


function isMatching(full, chunk) {
    let index = full.toLowerCase().indexOf(chunk.toLowerCase());
    let result = index != -1;
    return result;

}


function search(input) {
    //const items = document.querySelector(".class");
    let value = input.value;
    for (let item of items) {
        if (isMatching(item.textContent, value) == false) {
            item.style.display = 'none';

        } else {
            item.style.display = 'flex';
        }
    }
}

if (isMatching(str, chunk) == true) {
    console.log("contains");
} else {
    console.log("doesn t contain");
}

searchInput.addEventListener('keyup', () => {
    search(searchInput);
})
















































































