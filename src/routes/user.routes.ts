import express from "express";
import { users } from "../data/users";
import { User } from "../types/user.types";
import { nanoid } from "nanoid";
import { books } from "../data/books";

export const userRouter = express.Router();

userRouter
.route("/")
.get((req, res) => {
    const { minBooksCheckedOut } = req.query;
    let filtered = users;
    if (minBooksCheckedOut) {
        filtered = filtered.filter(user => user.booksCheckedOut.length >= +minBooksCheckedOut);
    };

    res.status(200).json(filtered);
})
.post((req, res) => {
    const newUser = {id: nanoid(5), ...req.body};
    users.push(newUser);
    res.status(201).json(newUser);
})

userRouter.route("/:id")
.get((req, res) => {
    const user = users.find(user => user.id === req.params.id);
    if (user) {
        res.json(user);
    }
    res.status(404).send(`User with id ${req.params.id} Not Found`);
})
.patch((req, res) => {
    const user = users.find(user => user.id === req.params.id);
    const userIndex = users.findIndex(user => user.id === req.params.id);

    const updatedUser = {...user, ...req.body};

    users.splice(userIndex, 1, updatedUser);

    if (user) {
        res.status(200).json(user);
    }
    res.status(404).send(`User with id ${req.params.id} Not Found`);
})
.delete((req, res) => {
    const user = users.find(user => user.id === req.params.id);
    const userIndex = users.findIndex(user => user.id === req.params.id);

    users.splice(userIndex, 1);

    if (user) {
        res.sendStatus(204);
    }
    res.status(404).send(`User with id ${req.params.id} Not Found`);
})

userRouter.get("/:id/books", (req, res) => {
    const user = users.find(user => user.id === req.params.id);
    let userBooks = books;
    
    if (user) {
        user.booksCheckedOut.forEach(userBookId => {
            userBooks = userBooks.filter(book => book.id === userBookId)
        });
        res.status(200).json(userBooks);
    }
    res.status(404).send(`User with id ${req.params.id} Not Found`)
})