import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user.routes";
import { bookRouter } from "./routes/book.routes";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/books", bookRouter)

const port = 3000;
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));