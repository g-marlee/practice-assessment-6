import { nanoid } from "nanoid";
import { Book } from "../types/book.types";

const books: Book[] = [
    {id: nanoid(), name: "The Hobbit", pages: 456, isCheckedOut: false},
    {id: nanoid(), name: "The Fellowship of the Ring", pages: 612, isCheckedOut: false},
    {id: nanoid(), name: "The Two Towers", pages: 426, isCheckedOut: false},
    {id: nanoid(), name: "The Return of the King", pages: 689, isCheckedOut: false},
]