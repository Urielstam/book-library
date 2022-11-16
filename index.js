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

let myLibrary = [hobbit, nameOfWind, elantris];

// Book constructure
function Book (name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = false;
}

// Add book instance
function addBook() {
    let bookName = prompt("Book name");
    let bookAuthor = prompt("Book Author");
    let bookPages = prompt("Book pages");

    const newBook = new Book();

    newBook.name = bookName;
    newBook.author = bookAuthor;
    newBook.pages = bookPages;

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

    const container = document.querySelector('.container');
    let newDiv = document.createElement('div');
    let newTitle = document.createElement('p');
    let newAuthor = document.createElement('p');
    let newPages = document.createElement('p');

    newDiv.classList.add('card');
    newTitle.classList.add('title');
    newAuthor.classList.add('author');
    newPages.classList.add('pages');

    newTitle.innerText = book.name;
    newAuthor.innerText = book.author;
    newPages.innerText = book.pages;

    container.appendChild(newDiv);

    newDiv.appendChild(newTitle);
    newDiv.appendChild(newAuthor);
    newDiv.appendChild(newPages);

}

