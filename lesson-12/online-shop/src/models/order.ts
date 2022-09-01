import mongoose, {Document, Types} from "mongoose";
import Joi from "joi";

import {handleSaveErrors} from "../helpers";

export interface IOrder extends Document {
    _id: Types.ObjectId;
    owner: Types.ObjectId;
    list: Array<Types.ObjectId>;
}

const {Schema, model} = mongoose;

const orderSchema = new Schema<IOrder>({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "user",
        require: true,
    },
    list: [{
        type: Schema.Types.ObjectId,
        ref: "product",
        required: true,
    }]
}, {versionKey: false, timestamps: true});

export const addSchema = Joi.object({
    list: Joi.array().required(),
})

orderSchema.post("save", handleSaveErrors);

const Order = model("order", orderSchema);

export default Order;
