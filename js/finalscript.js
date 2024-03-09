const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const searchInput = document.querySelector('#searchInput');
//const searchButton = document.querySelector('#searchButton');
const list = document.getElementById('#list');
const items = document.querySelectorAll('.item');


function isMatching(full, chunk) {
    let index = full.toLowerCase().indexOf(chunk.toLowerCase());
    let result = index != -1;
    return result;
}

function search(input) {
    const items = document.querySelectorAll('.item');
    let value = input.value;
    for(let item of items) {
        console.log(item);
        if (isMatching(item.textContent, value) == false) {
            item.style.display = 'none';
        } else {
            item.style.display = 'flex';
        }
    }
}


searchInput.addEventListener('keyup', () => {
    search(searchInput);
})




/*
myButton.addEventListener('click', () => {
    search(searchInput);
})
*/


if (isMatching(str, chunk) == true) {
    console.log('Contains');
} else {
    console.log('Doesnt contain');
}


myButton.addEventListener('click', () => {
    // создать элемент списка
    const newItem = document.createElement('li');

    //добавить элемент в список
    // parent .appendChild(item) - добавить элемент item в конец элемента parent
    list.appendChild(newItem);

    // item.classList.add(class) добавить элементу item класс class
    newItem.classList.add('item');
    /*
    if ((list.indexOf(newItem) % 2) == 0) {
        newItem.style.backgroundColor = 'white';
    } else {
        
        newItem.style.backgroundColor = 'grey';
    }
    */
   /*
   
    text-decoration: line-through;
    */
   

    // записать сдержимое поля ввода в элемент списка
    //newItem.textContent = nameInput.value;
    const intext = document.createElement('button')
    intext.classList.add('text');
    newItem.appendChild(intext);
    intext.innerHTML = '<p class="texttext">' + nameInput.value + '</p>';

    
    // Очистить поле ввода
    nameInput.value = '';

    // создать кнопку удаления добавленного элемента списка
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn')
    deleteBtn.innerHTML = '<img src="icons/cross.png" class="cross">';

    // добавить кнопку удаления в элемент списка
    newItem.appendChild(deleteBtn);


    //const texttext = newItem.childNodes;

    //newItem.appendChild(intext);
    intext.addEventListener('click', ()=>{
        //let iscrossed = texttext.style.textDecoration;
        let texttext = newItem.firstChild;
        let texttextstyle = getComputedStyle(texttext);
        let isCrossed = texttextstyle.getPropertyValue("text-decoration"); 
        let crosscross = newItem.lastChild; 
        if (isCrossed.indexOf('line-through') == -1) {
            //newItem.setAttribute('style', 'color:white;');
            texttext.style.color = 'white';
            texttext.style.textDecoration = 'line-through';
            
            //newItem.style.color = 'white';
            newItem.style.backgroundColor = "#474747";
            deleteBtn.innerHTML = '<img src="icons/cross2.png" class="cross">';

        } else {
            //newItem.setAttribute('style', 'color:black;');
            //newItem.style.color = 'black';
            texttext.style.color = 'black';
            newItem.style.backgroundColor = "#d7d7d7";
            texttext.style.textDecoration = 'none';
            deleteBtn.innerHTML = '<img src="icons/cross.png" class="cross">';


        }
    })




    //удаление элемента списка
    //parent.removeChild(item) - удалить элемент из элемента parent

    deleteBtn.addEventListener('click', ()=> {
        list.removeChild(newItem);
    })
    






    //working bit
    


    
    let parent = newItem.parentNode;
    var index = Array.prototype.indexOf.call(parent.children, newItem);
    if ((index + 2) % 2 == 0) {
        newItem.style.backgroundColor = 'white';
    } else {
        newItem.style.backgroundColor = 'grey';
    }
    





    /*
    let children = list.childNodes;
    console.log(children); // 👉️ [div.child1, div.child2, div.child3]
    
    *//*
    const firstChild = children.item(0);
    */
   /*

    for (let i = 0; i < 10; i++) {
        const children = list.childNodes;
        const child = children[i];
        if ((i + 2) % 2 == 0) {
            child.style.backgroundColor = 'white';
        } else {
            child.style.backgroundColor = 'grey';
        }

    }

    */



    /*
    const children = list.children;
    Array.prototype.forEach.call(parent.children, child => {
        const index = children.indexOf(child);
        if ((index + 2) % 2 == 0) {
            child.style.backgroundColor = "white";
        } else {
            child.style.backgroundColor = "grey";
        }

    })
    */


//working??? :
/*

    const children = list.children;
    for (let child of children)  {
        const index = children.indexOf(child);
        if ((Number(index) + 2) % 2 == 0) {
            child.style.backgroundColor = "white";
        } else {
            child.style.backgroundColor = "grey";
        }

    }

*/

    /*
    for (let value of children) {
        value += 1;
        console.log(value);
    }
    */









    /*
    children.forEach((item) => {
        //var parent = item.parentNode;
        const index = children.indexOf(item);
        if ((index + 2) % 2 == 0) {
            item.style.backgroundColor = "white";
        } else {
            item.style.backgroundColor = "grey";
        }
    })
    */





    /*
    var child = document.getElementById('my_element');
    var parent = child.parentNode;
    // The equivalent of parent.children.indexOf(child)
    var index = Array.prototype.indexOf.call(parent.children, child);
    */
    

})
