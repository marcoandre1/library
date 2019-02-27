class Book {
    constructor(name, pages) {
        this.name = name;
        this.pages = pages;
    }
    getName() {
        return this.name;
    }
    getPagesOfBook() {
        return this.pages;
    }
}

const book1 = new Book("Le Seigneur des anneaux", 250);
//book1.getName();
//book1.getPagesOfBook();
//console.log(book1);

const book2 = new Book("Ma Vie", 123);
//book2.getName();
//book2.getPagesOfBook();

const book3 = new Book("Armagedon", 200);
//book3.getName();
//book3.getPagesOfBook();

class Library {
    constructor(libraryBooks, borrowedBooks) {
        this.libraryBooks = libraryBooks;
        this.borrowedBooks = borrowedBooks;
    }

    addBook(book) {
        this.libraryBooks.push(book);
    }

    borrowBook(name) {
        let isIndex = 0;
        let isPresent = 0;
        for (let i = 0; i < this.libraryBooks.length; i++) {
            if (name === this.libraryBooks[i].getName()) {
                isPresent += 1
                isIndex = i
            }
        }
        if (isPresent > 0) {
            this.borrowedBooks.push(this.libraryBooks[isIndex])
            this.libraryBooks.splice(isIndex, 1)
        } else {
            console.log("Book is not present in the library.")
        }
    }

    returnBook(name) {
        let isIndex = 0;
        let isPresent = 0;
        for (let i = 0; i < this.borrowedBooks.length; i++) {
            if (name === this.borrowedBooks[i].getName()) {
                isPresent += 1
                isIndex = i
            }
        }
        if (isPresent > 0) {
            this.libraryBooks.push(this.borrowedBooks[isIndex])
            this.borrowedBooks.splice(isIndex, 1)
        } else {
            console.log("Book is not a borrowed book from the library.")
        }
    }

    getBiggestBook() {
        let biggestBook;
        let biggestBookPages = 0;
        for (let i = 0; i < this.libraryBooks.length; i++) {
            if (biggestBookPages < this.libraryBooks[i].getPagesOfBook()) {
                biggestBook = this.libraryBooks[i].getName();
                biggestBookPages = this.libraryBooks[i].getPagesOfBook();
            }
        }
        return biggestBook;
    }
}

const library1 = new Library([], []);
library1.addBook(book1);
library1.addBook(book2);
library1.addBook(book3);
//library1.borrowBook("name");
//library1.borrowBook("Ma Vie");
//library1.getBiggestBook();
const book4 = new Book("Harry Potter 2", 550);
library1.addBook(book4);
//library1.getBiggestBook();
const book5 = new Book("Harry Potter 1", 350);
library1.addBook(book5);
//library1.getBiggestBook();

//library1.borrowBook("Hello there!");
library1.borrowBook("Ma Vie");

console.log(library1);

//library1.returnBook("Yay!");
library1.returnBook("Ma Vie");

console.log(library1);

//Create books and add them to the library!
const book6 = new Book("Schrodinger", 1000);
const book7 = new Book("Redfoo", 5);
const book8 = new Book("Le petit prince", 75);
const book9 = new Book("La chambre d'amis", 154);
const book10 = new Book("2 weeks away!", 87);
const book11 = new Book("Star Wars", 77);
const book12 = new Book("Why Foobar?", 86);
library1.addBook(book6);
library1.addBook(book7);
library1.addBook(book8);
library1.addBook(book9);
library1.addBook(book10);
library1.addBook(book11);
library1.addBook(book12);

library1.borrowBook("Le Seigneur des anneaux");
library1.borrowBook("Le petit prince");
library1.borrowBook("Why Foobar?");
library1.borrowBook("Schrodinger");
library1.borrowBook("Ma Vie");

console.log(library1);

const book13 = new Book("Harry Potter 3", 565);
const book14 = new Book("Enfants", 56);
const book15 = new Book("Beautiful Lady", 45);
const book16 = new Book("Super", 166);
const book17 = new Book("Popol Vuh", 99);
const book18 = new Book("Bra size: how they work?", 23);
const book19 = new Book("The Beetles", 143);
library1.addBook(book13);
library1.addBook(book14);
library1.addBook(book15);
library1.addBook(book16);
library1.addBook(book17);
library1.addBook(book18);
library1.addBook(book19);

library1.borrowBook("Armagedon");
library1.borrowBook("Harry Potter 3");
library1.borrowBook("The Beetles");

library1.returnBook("Le petit prince");
library1.returnBook("Why Foobar?");
library1.returnBook("Schrodinger");

console.log(library1);

//A new library could also be created
const library2 = new Library([], []);
library2.addBook(book1);
library2.addBook(book2);
library2.addBook(book3);
