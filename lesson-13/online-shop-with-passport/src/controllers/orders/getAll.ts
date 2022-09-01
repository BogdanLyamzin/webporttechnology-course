import { Request, Response } from "express";

import Order, { IOrder } from './../../models/order';

import { IRequest } from "../../middlewares/authenticate";

const getAll = async (req: IRequest, res: Response): Promise<void> => {
    const result: Array<IOrder> = await Order.find({owner: req.user?.id}, "owner list")
                                        .populate("owner", "email")
                                        .populate("list");
    res.json(result);
}

export default getAll;