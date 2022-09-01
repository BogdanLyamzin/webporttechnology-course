import mongoose, {Types, Document} from "mongoose";
import Joi from "joi";

import {handleSaveErrors} from "../helpers";

const {Schema, model} = mongoose;

export interface ICategory extends Document {
    _id?: Types.ObjectId;
    name: string;
    description: string;
}

const categorySchema = new Schema<ICategory>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, {versionKey: false, timestamps: true});

categorySchema.post("save", handleSaveErrors);

const Category = model("category", categorySchema);

export const addSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required()
})

export default Category;