import {Request, Response} from "express";
import {Document} from "mongoose";

import Book from "../../models/book";

import { createError } from "../../helpers";

interface IBook extends Document {
    title: string
    author: string
    favorite?: boolean
    genre: "fantastic" | "love"
    isbn: string
}

const updateById = async (req: Request, res: Response): Promise<void | never> => {
    const { id } = req.params;
    const result: IBook = await Book.findByIdAndUpdate(id, req.body, {new: true});
    if (!result) {
        throw createError(404, "Not found")
    }
    res.json(result);
}

export default updateById;