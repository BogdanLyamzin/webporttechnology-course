import Book from "../../models/book.js";

const add = async (req, res) => {
    const result = await Book.create(req.body);
    res.status(201).json(result)
}

export default add;