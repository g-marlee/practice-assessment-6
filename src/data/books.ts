import { nanoid } from "nanoid";
import { Book } from "../types/book.types";

export const books: Book[] = [
    {id: "test", name: "The Hobbit", pages: 456, isCheckedOut: false},
    {id: nanoid(5), name: "The Fellowship of the Ring", pages: 612, isCheckedOut: false},
    {id: nanoid(5), name: "The Two Towers", pages: 426, isCheckedOut: false},
    {id: nanoid(5), name: "The Return of the King", pages: 689, isCheckedOut: false},
]