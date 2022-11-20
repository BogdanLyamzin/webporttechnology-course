import mongoose, {Types, Document} from "mongoose";
import Joi from "joi";

import { ICategory } from "./category";

import {handleSaveErrors} from "../helpers";

const {Schema, model} = mongoose;

const codeRegexp = /\d{9}/;

export interface IProduct extends Document {
    name: string;
    price: number;
    description: string;
    code: string;
    category: Types.ObjectId | ICategory
}

const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: [true, "Name must be exist"],
    },
    price: {
        type: Number,
        required: [true, "Price must be exist"],
        min: [0.01, "Price must be positive"],
    },
    description: {
        type: String,
        required: [true, "Description must be exist"],
        minlength: [10, "Description must have at least 10 letters"],
    },
    code: {
        type: String,
        required: true,
        validate: {
            validator(value: string) {
                return codeRegexp.test(value);
            },
            message: (props) => `${props.value} must be 9 numbers: "347394900" `
        },
        unique: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "category",
        required: true,
    }
}, {versionKey: false, timestamps: true});

productSchema.post("save", handleSaveErrors);

export const addSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().min(0.01).required(),
    description: Joi.string().min(10).required(),
    code: Joi.string().pattern(codeRegexp).required(),
    category: Joi.string().required(),
});

const Product = model("product", productSchema);

export default Product;