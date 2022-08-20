import mongoose, {Types} from "mongoose";

const {Schema, model} = mongoose;

const codeRegexp = /\d{9}/;

interface IBook {
    name: string;
    price: number;
    description: string;
    code: string;
    category: Types.ObjectId;
}

const productSchema = new Schema<IBook>({
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
            validator(value) {
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

const Product = model("product", productSchema);

export default Product;