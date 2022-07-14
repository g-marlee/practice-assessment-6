import express from "express";
import { books } from "../data/books";
import { Book } from "../types/book.types";
import { nanoid } from "nanoid";
import { users } from "../data/users";

export const bookRouter = express.Router();

bookRouter.route("/")
.get((req, res) => {
    let filteredBooks = books;
    if (req.query.isCheckedOut) {
        filteredBooks = filteredBooks.filter(book => book.isCheckedOut === true);
    }

    res.status(200).json(filteredBooks);
})
.post((req, res) => {
    const newBook = {id: nanoid(5), ...req.body};
    books.push(newBook);
    res.status(201).json(newBook);
})

bookRouter.route("/:id")
.get((req, res) => {
    const book = books.find(book => book.id === req.params.id);

    if (book) {
        res.status(200).json(book);
    }
    res.status(404).send(`Book with id ${req.params.id} not found`);
})
.patch((req, res) => {
    const book = books.find(book => book.id === req.params.id);
    const bookIndex = books.findIndex(book => book.id === req.params.id);

    const updatedBook = {...book, ...req.body};

    books.splice(bookIndex, 1, updatedBook);

    if (book) {
        res.status(200).json(updatedBook);
    }
    res.status(404).send(`Book with id ${req.params.id} not found`);
})
.delete((req, res) => {
    const book = books.find(book => book.id === req.params.id);
    const bookIndex = books.findIndex(book => book.id === req.params.id);

    books.splice(bookIndex, 1);

    if (book) {
        res.sendStatus(204);
    }

    res.status(404).send(`Book with id ${req.params.id} not found`);
})

bookRouter.route("/:id/checkout/:userId")
.patch((req, res) => {
    const book = books.find(book => book.id === req.params.id);
    const user = users.find(user => user.id === req.params.userId);

    if (book && user) {
        book.isCheckedOut = true;
        user.booksCheckedOut.push(book.id);
        res.json(book);
    }
    res.status(404).send(`Book with id ${req.params.id} or User with id ${req.params.userId} not found`);
})

bookRouter.route("/:id/checkin/:userId")
.patch((req, res) => {
    const book = books.find(book => book.id === req.params.id);
    const user = users.find(user => user.id === req.params.userId);

    if (book && user) {
        if (book.isCheckedOut === true) {
            book.isCheckedOut = false;
            let bookIndex = user.booksCheckedOut.findIndex(book => book === req.params.id);
            user.booksCheckedOut.splice(bookIndex, 1);
        }
        res.json(book);
    }
    res.status(404).send(`Book with id ${req.params.id} or User with id ${req.params.userId} not found`);
})
