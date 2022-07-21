import mongoose, {Document} from "mongoose";

const {Schema, model} = mongoose;

interface IBook {
    title: string
    author: string
    favorite?: boolean
    genre: "fantastic" | "love"
    isbn: string
}

const bookSchema = new Schema<IBook>({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    genre: {
        type: String,
        enum: ["fantastic", "love"],
        required: true,
    },
    isbn: {
        type: String,
        match: /[0-9]{3}-[0-9]{1}-[0-9]{3}-[0-9]{5}-[0-9]{1}/,
        required: true,
        unique: true,
    }
}, {versionKey: false, timestamps: true});

interface RequestError extends Error {
    status?: number,
    code?: number,
}

const handleErrors = (error: RequestError, data: Document, next: ()=> void)=> {
    const {name, code} = error;
    if(name === "MongoServerError" && code === 11000) {
        error.status = 409;
    }
    else {
        error.status = 400;
    }
    next()
}

bookSchema.post("save", handleErrors);

const Book = model<IBook>("book", bookSchema);
// categories => category
// mice => mouse

export default Book;