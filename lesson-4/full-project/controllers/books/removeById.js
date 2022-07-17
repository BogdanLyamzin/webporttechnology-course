import Book from "../../models/book.js";

import { createError } from "../../helpers/index.js";

const removeById = async (req, res) => {
    const { id } = req.params;
    const result = await Book.findByIdAndRemove(id);
    if (!result) {
        throw createError(404, "Not found")
    }
    res.status(204).json({
        message: "Delete success"
    })
}

export default removeById;