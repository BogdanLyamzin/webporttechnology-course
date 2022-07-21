import {Request, Response} from "express";

import Book from "../../models/book";
import {Document} from "mongoose";

interface IBook extends Document {
    title: string
    author: string
    favorite?: boolean
    genre: "fantastic" | "love"
    isbn: string
}

const add = async (req: Request, res: Response): Promise<void | never> => {
    const result: IBook = await Book.create(req.body);
    res.status(201).json(result)
}

export default add;