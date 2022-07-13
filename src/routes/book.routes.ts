import express from "express";
import { books } from "../data/books";
import { Book } from "../types/book.types";
import { nanoid } from "nanoid";

export const bookRouter = express.Router();