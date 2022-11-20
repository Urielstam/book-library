const hobbit = {
    name: 'hobbit',
    author: 'Tolkien',
    pages: 100,
    read: true,
}


let myLibrary = [hobbit, hobbit];

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
// let cardRead = document.querySelector('.card-read');


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


// Create book
function createBook(book) {
    
    // let card = document.querySelector('.card');
    // let cardClone = card.cloneNode(true);
    
    // newTitle.innerText = book.name;
    // newAuthor.innerText = book.author;
    // newPages.innerText = book.pages;
    // card.after(cardClone);

    // if (book.read) {
    //     cardRead.classList.remove('red')
    //     cardRead.classList.add('green');
    // } else {
    //         cardRead.classList.remove('green');
    //         cardRead.classList.add('red');
    //     }

            
    const container = document.querySelector('.container');
    const actionBtns = document.querySelector('.action-btns');

    const newCard = document.createElement('div');
    const cardContent = document.createElement('div');
    const newActions = document.createElement('div'); 

    const titlePar = document.createElement('p');
    const authPar = document.createElement('p');
    const pagePar = document.createElement('p');

    const tagTitleSpan = document.createElement('span');
    const tagAuthSpan = document.createElement('span');
    const tagPageSpan = document.createElement('span');
    const titleSpan = document.createElement('span');
    const authorSpan = document.createElement('span');
    const pagesSpan = document.createElement('span'); 

    const actionsCLone = actionBtns.cloneNode(true);


    newCard.classList.add('card');
    cardContent.classList.add('card-content');
    newActions.classList.add('actions');
    tagTitleSpan.classList.add('tag');
    tagAuthSpan.classList.add('tag');
    tagPageSpan.classList.add('tag');
    titleSpan.classList.add('card-title');
    authorSpan.classList.add('card-author');
    pagesSpan.classList.add('card-pages');

    tagTitleSpan.innerText = 'Title: ',
    tagAuthSpan.innerText = 'Author: ',
    tagPageSpan.innerText = 'Pages: ' ,

    titleSpan.innerText = book.name
    authorSpan.innerText = book.author
    pagesSpan.innerText = book.pages
   


    titlePar.appendChild(tagTitleSpan);
    titlePar.appendChild(titleSpan);

    authPar.appendChild(tagAuthSpan);
    authPar.appendChild(authorSpan);

    pagePar.appendChild(tagPageSpan);
    pagePar.appendChild(pagesSpan);
    

    cardContent.appendChild(titlePar);
    cardContent.appendChild(authPar);
    cardContent.appendChild(pagePar);

    newCard.appendChild(cardContent);

    newActions.appendChild(actionsCLone);
    newCard.appendChild(newActions);

    container.appendChild(newCard);

    setData(newCard);

}

// Give new card a data set

const setData = (card) => {
    if (myLibrary.length || myLibrary.length === 0) {
        for(let book in myLibrary) {
            console.log(myLibrary.indexOf(book))
            card.datset.card = myLibrary.indexOf(book);
        }
    }
}


// Show if book is read


// allActions.forEach((item) => {
//     item.addEventListener('click', (event) => {
//         item.firstChild.classList.toggle('have-read');
//     })
// });


// TODO -> create remove functionality



// Display default content
function displayOriginal() {
    for (const element of myLibrary) {
        createBook(element);
    }  
}
displayOriginal();





