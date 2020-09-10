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

        books.forEach((book) => Uint16Array.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.getElementById('#book-list');

        const row = document.createElement('tr');

        row.innerHTML = `<td>${book.title}<td>
                         <td>${book.author}<td>
                         <td>${book.isbn}<td>
                         <td><a href="#" class="btn btn-danger btn-sm delete">X</a><td>
        `
    }
}