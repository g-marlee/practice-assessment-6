import { nanoid } from "nanoid";
import { User } from "../types/user.types";
import { books } from "./books";

export const users: User[] = [
    {id: nanoid(5), name: "Marlee", address: "St Clair Shores", booksCheckedOut: []},
    {id: nanoid(5), name: "Nathan", address: "St Clair Shores", booksCheckedOut: []},
    {id: nanoid(5), name: "Sarah", address: "Royal Oak", booksCheckedOut: []},
    {id: nanoid(5), name: "Noe", address: "Mt Clemens", booksCheckedOut: []},
]