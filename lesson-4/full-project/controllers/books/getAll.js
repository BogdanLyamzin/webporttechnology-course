import Book from "../../models/book.js";

const getAll = async (req, res) => {
    const {page = 1, limit = 10} = req.query;
    const skip = (page - 1) * limit;
    const result = await Book.find({}, "-createdAt -updatedAt", {skip, limit: Number(limit)})
    // const result = await Book.find({}, "title author")
    res.json(result);
}

export default getAll;