import { Request, Response } from "express";

import Category, {ICategory} from "../../models/category";

const getAll = async(_: Request, res: Response): Promise<void> | never => {
    const result: Array<ICategory> = await Category.find({}, "-createdAt -updatedAt");
    res.json(result);
}

export default getAll;