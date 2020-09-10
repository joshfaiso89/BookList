class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'John',
                isbn: '3434434'
            }, 
            {
                title: 'Book Two',
                author: 'Jane',
                isbn: '34433'
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `<td>${book.title}<td>
                         <td>${book.author}<td>
                         <td>${book.isbn}<td>
                         <td><a href="#" class="btn btn-danger btn-sm delete">X</a><td>
        `;

        list.appendChild(row);
    }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('title').value; 
    const author = document.querySelector('author').value; 
    const isbn = document.querySelector('isbn').value; 

    //Instantiate book
    const book = new Book(title, author, isbn);

    console.log(book);
});