import { Request, Response } from "express";

import Product, {IProduct} from "../../models/product";

const add = async(req: Request, res: Response): Promise<void> | never => {
    const result: IProduct = await Product.create(req.body);
    res.status(201).json(result);
}

export default add;