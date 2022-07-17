import mongoose from "mongoose";

const {Schema, model} = mongoose;

const bookSchema = Schema({
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

const handleErrors = (error, data, next)=> {
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

const Book = model("book", bookSchema);
// categories => category
// mice => mouse

export default Book;