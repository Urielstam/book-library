const hobbit = {
    name: 'hobbit',
    author: 'Tolkien',
    pages: 100,
    read: true,
}

const elentrus = {
    name: 'elentrus',
    author: 'Brandon',
    pages: 100,
    read: false,
}



let myLibrary = [hobbit, elentrus];

class Book {
    constructor(
        name = "Unknown",
        author = "Uknown", 
        pages = "0", 
        read = false,
    )   {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
        }
}



// * Gloabal variables
const openBtn = document.querySelector('.open-btn');
const formPopUp = document.querySelector('.form-popup');
const formContainer = document.querySelector('#form-container');
const closeBtn = document.querySelector('.close');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');

let newTitle = document.querySelector('.card-title');
let newAuthor = document.querySelector('.card-author');
let newPages = document.querySelector('.card-pages');



// * Popup Form
const openBookForm = () => {
    formContainer.reset();
    formPopUp.classList.add('active');  
}

const closeBookForm = () => {
    formPopUp.classList.remove('active');
}

openBtn.addEventListener('click', openBookForm);

closeBtn.addEventListener('click', closeBookForm);

formContainer.addEventListener('submit', (event) => {

    event.preventDefault();

    let bookName = title.value;
    let bookAuthor = author.value;
    let bookPages = pages.value;
    let bookRead = read.checked;
    console.log(bookRead);

    addBook(bookName, bookAuthor, bookPages, bookRead);
    closeBookForm();

})



// * Add book instance
function addBook(title, author, pages, read) {

    const newBook = new Book();

    newBook.name = title;
    newBook.author = author;
    newBook.pages = pages;
    newBook.read = read;

    myLibrary.push(newBook);
    createBook(newBook);
}

//* dispaly book
const container = document.querySelector('.container');

// *Toggle 
const toggleGreen = (element) => {
    element.classList.remove('red')
    element.classList.add('green');
}

const toggleRed = (element) => {
    element.classList.remove('green');
    element.classList.add('red');
}

const toggle = (element) => {
    if(element.classList.contains('red')) {
        toggleGreen(element);
    } else {
        toggleRed(element);
    }
}

// TODO -> create remove functionality

const removeEl = (element) => {
    let parentCardEl = element.target.parentElement.parentElement.parentElement.parentElement
        console.log(parentCardEl)
        if (element.target.tagName.toLowerCase() === 'iconify-icon') {
            let index = Number(parentCardEl.dataset.card)
            console.log(index)
            console.log(myLibrary.indexOf(myLibrary[index]))
            // container.remove(parentCardEl)
            if(myLibrary.indexOf(myLibrary[index]) > -1) {
                myLibrary.splice(index, 1);
            }

            parentCardEl.remove();
        }
}


// Create book
let i = 0;

function createBook(book) {
    
    let card = document.querySelector('.default');
    let cardClone = card.cloneNode(true);
    cardClone.classList.add('card');
    cardClone.classList.remove('default')

    let realTitle = cardClone.firstElementChild.firstElementChild.lastElementChild;
    let realAuthor = cardClone.firstElementChild.getElementsByTagName('p')[1].lastElementChild;
    let realPages = cardClone.firstElementChild.lastElementChild.lastElementChild;
    let cloneRead = cardClone.lastElementChild.firstElementChild.firstElementChild;
    let removeBtn = cardClone.lastElementChild.firstElementChild.lastElementChild;


    realTitle.innerText = book.name;
    realAuthor.innerText = book.author;
    realPages.innerText = book.pages;

    // setData(book);

    cardClone.dataset.card = i
    i++;

    if(book.read) {
        toggleGreen(cloneRead);
    } 
    else {
        toggleRed(cloneRead);
    }

    container.prepend(cardClone);
    
    removeBtn.addEventListener('click', (e) => {
        removeEl(e);
    })

    cloneRead.addEventListener('click', (e) => {
        console.log('TOggles')
        toggle(cloneRead);
    })
  
}

let allCards = document.getElementsByClassName('card');
console.log(allCards)

const setData = (card) => {
        let i = 0;
        for( let elm of allCards) {
            elm.dataset.card = i
            i++;
        }
}


// Display default content
let card = document.querySelector('.default');
let cardRead = card.lastElementChild.firstElementChild.firstElementChild;
cardRead.addEventListener('click', () => {
    toggle(cardRead);
})

function displayOriginal() {
    for (const element of myLibrary) {
        createBook(element);
    }  
}
displayOriginal();


// * Display all content
// function displayBooks() {
//     for(let card in myLibrary) {
        
//     }
// }
// displayBooks();










