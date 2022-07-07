import express from "express";
import cors from "cors";

import booksRouter from "./routes/api/books.js";

const app = express();

app.use(cors());
app.use(express.json())

app.use("/api/books", booksRouter);

app.use((req, res) => {
    res.status(404).json({
        message: "Not found"
    })
})

app.listen(3000);