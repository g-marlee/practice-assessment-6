import express from "express";
import { users } from "../data/users";
import { User } from "../types/user.types";
import { nanoid } from "nanoid";

export const userRouter = express.Router();
