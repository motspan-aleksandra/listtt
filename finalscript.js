const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const list = document.querySelector('#list');

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
    //const texttext = newItem.childNodes;

    //newItem.appendChild(intext);
    intext.addEventListener('click', ()=>{
        //let iscrossed = texttext.style.textDecoration;
        let texttext = newItem.firstChild;
        let texttextstyle = getComputedStyle(texttext);
        let isCrossed = texttextstyle.getPropertyValue("text-decoration");  
        if (isCrossed.indexOf('line-through') == -1) {
            texttext.style.textDecoration = 'line-through';
        } else {
            texttext.style.textDecoration = 'none';
        }
    })

    // Очистить поле ввода
    nameInput.value = '';

    // создать кнопку удаления добавленного элемента списка
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn')
    deleteBtn.innerHTML = '<img src="icons/cross.png" class="cross">';

    // добавить кнопку удаления в элемент списка
    newItem.appendChild(deleteBtn);



    //удаление элемента списка
    //parent.removeChild(item) - удалить элемент из элемента parent

    deleteBtn.addEventListener('click', ()=> {
        list.removeChild(newItem);
    })

})
