import { Request, Response } from "express";

import Product, {IProduct} from "../../models/product";

const getAll = async(_: Request, res: Response): Promise<void> | never => {
    const result: Array<IProduct> = await Product.find({}, "-name -createdAt -updatedAt")
                                                    .populate("category", "-createdAt -updatedAt");
    res.json(result);
};

export default getAll;