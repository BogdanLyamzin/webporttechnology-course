import { Request, Response } from "express";

import Category, {ICategory} from "../../models/category";

const add = async(req: Request, res: Response): Promise<void> | never => {
    const result: ICategory = await Category.create(req.body);
    res.status(201).json(result);
}

export default add;