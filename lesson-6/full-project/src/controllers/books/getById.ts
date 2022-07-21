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

const getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result: IBook = await Book.findById(id);
    // const result = await Book.findOne({_id: id})
    if (!result) {
        throw createError(404, "Not found")
    }
    res.json(result);
}

export default getById;