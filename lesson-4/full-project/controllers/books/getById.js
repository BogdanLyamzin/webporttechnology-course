import Book from "../../models/book.js";

import { createError } from "../../helpers/index.js";

const getById = async (req, res) => {
    const { id } = req.params;
    const result = await Book.findById(id);
    console.log(result);
    // const result = await Book.findOne({_id: id})
    if (!result) {
        throw createError(404, "Not found")
    }
    res.json(result);
}

export default getById;