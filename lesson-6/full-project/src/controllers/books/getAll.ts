import {Request, Response} from "express";
import {Document} from "mongoose";

import Book from "../../models/book";

interface IBook extends Document {
    title: string
    author: string
    favorite?: boolean
    genre: "fantastic" | "love"
    isbn: string
}

const getAll = async (req: Request, res: Response): Promise<void> => {
    const {page = 1, limit = 10} = req.query;
    const skip: number = (Number(page) - 1) * Number(limit);
    const result: Array<IBook> = await Book.find({}, "-createdAt -updatedAt", {skip, limit: Number(limit)})
    // const result = await Book.find({}, "title author")
    res.json(result);
}

export default getAll;