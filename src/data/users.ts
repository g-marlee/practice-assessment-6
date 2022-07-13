import { nanoid } from "nanoid";
import { User } from "../types/user.types";

export const users: User[] = [
    {id: nanoid(), name: "Marlee", address: "St Clair Shores", booksCheckedOut: []},
    {id: nanoid(), name: "Nathan", address: "St Clair Shores", booksCheckedOut: []},
    {id: nanoid(), name: "Sarah", address: "Royal Oak", booksCheckedOut: []},
    {id: nanoid(), name: "Noe", address: "Mt Clemens", booksCheckedOut: []},
]