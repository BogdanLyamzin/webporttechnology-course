import { Response } from "express";

import Order, { IOrder } from './../../models/order';
import { IRequest } from "../../middlewares/authenticate";

const add = async(req: IRequest, res: Response): Promise<void> => {
    const result: IOrder = await (await (await Order.create({...req.body, owner: req.user?.id}))
                            .populate("list", "-createdAt -updatedAt"))
                            .populate("owner", "-password -createdAt -updatedAt");
    res.status(201).json(result);
}

export default add;