import { Response } from "express";

import { IRequest } from "../../middlewares/authenticate";
import Order, { IOrder } from './../../models/order';

const getCurrent = async(req: IRequest, res: Response): Promise<void> => {
    const result: Array<IOrder> = await Order.find({owner: req.user?.id}, "owner list")
                                            .populate("owner")
                                            .populate("list");
    res.json({
        email: req.user?.email,
        orders: result
    })
}

export default getCurrent;