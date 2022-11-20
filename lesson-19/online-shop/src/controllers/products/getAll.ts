import { Request, Response } from "express";

import Product, {IProduct} from "../../models/product";

const getAll = async(req: Request, res: Response): Promise<void> | never => {
    const {page = 1, limit = 10} = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const total = await Product.count();
    const result: Array<IProduct> = await Product.find({}, "-name -createdAt -updatedAt", {skip, limit: Number(limit)})
                                                    .populate("category", "-createdAt -updatedAt");
    res.json({
        total,
        result,
    });
};

export default getAll;