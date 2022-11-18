// Default values
const hobbit = {
    name: "Hobbit",
    author: "Tolkien",
    pages: 200,
    read: true,
}

const nameOfWind = {
    name: "The Name of the Wind",
    author: "Smith",
    pages: 400,
    read: false,
}

const elantris = {
    name: "Elantris",
    author: "Brandon",
    pages: 500,
    read: true,
}

const Hellow = {
    name: "Elantris",
    author: "Brandon",
    pages: 500,
    read: true,
}

let myLibrary = [hobbit, nameOfWind];

// Book constructure
function Book (name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = false;
}




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
let cardRead = document.querySelector('.card-read');

// Popup Form
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




// Accept form input -> pass to addBook()

// Add book instance
function addBook(title, author, pages, read) {

    const newBook = new Book();

    newBook.name = title;
    newBook.author = author;
    newBook.pages = pages;
    newBook.read = read;

    myLibrary.push(newBook);
    displayBook(newBook);
}

console.log(myLibrary);

// Display default content
function displayOriginal() {
    for (const element of myLibrary) {
        displayBook(element);
    }  
}
displayOriginal();

// Display book
function displayBook(book) {


    let card = document.querySelector('.card');
    let cardClone = card.cloneNode(true);

    newTitle.innerText = book.name;
    newAuthor.innerText = book.author;
    newPages.innerText = book.pages;

    if (book.read) {
        cardRead.classList.remove('red')
        cardRead.classList.add('green');
    } else {
        cardRead.classList.remove('green');
        cardRead.classList.add('red');
    }

    card.after(cardClone);

}

// Change if read
let cardReadAll = document.querySelectorAll('.card-read');
console.log(cardReadAll)

cardReadAll.forEach((item) => {
    item.addEventListener('click', (event) => {
        if (item.classList.contains('red')) {
            item.classList.remove('red')
            item.classList.add('green');
        } else {
            item.classList.remove('green');
            item.classList.add('red');
        }
    })
})




