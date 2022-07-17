import Book from "../../models/book.js";

import { createError } from "../../helpers/index.js";

const updateById = async (req, res) => {
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body, {new: true});
    if (!result) {
        throw createError(404, "Not found")
    }
    res.json(result);
}

export default updateById;