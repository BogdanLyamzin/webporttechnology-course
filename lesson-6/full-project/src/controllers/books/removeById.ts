import {Request, Response} from "express";

import Book from "../../models/book";

import { createError } from "../../helpers";
import {Document} from "mongoose";

interface IBook extends Document {
    title: string
    author: string
    favorite?: boolean
    genre: "fantastic" | "love"
    isbn: string
}

const removeById = async (req: Request, res: Response): Promise<void | never> => {
    const { id } = req.params;
    const result: IBook = await Book.findByIdAndRemove(id);
    if (!result) {
        throw createError(404, "Not found")
    }
    res.status(204).json({
        message: "Delete success"
    })
}

export default removeById;