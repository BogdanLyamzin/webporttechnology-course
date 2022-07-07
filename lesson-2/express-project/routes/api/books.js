import express from "express";

import books from "../../models/books/index.js";

const router = express.Router();

router.get("/", async (req, res)=> {
    try {
        const result = await books.getAll();
        res.json(result);
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        })
    }
});

router.get("/:id", async (req, res)=> {
    try {
        const {id} = req.params;
        const result = await books.getById(id);
        if(!result){
            return res.status(404).json({
                message: "Not found"
            })
        }
        res.json(result);
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        })
    }
})

router.post("/", async (req, res)=> {
    try {
        const result = await books.add(req.body);
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        })
    }
})

router.put("/:id", async (req, res)=> {
    try {
        const {id} = req.params;
        const result = await books.updateById(id, req.body);
        if(!result){
            return res.status(404).json({
                message: "Not found"
            })
        }
        res.json(result);
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        })
    }
})

router.delete("/:id", async(req, res)=> {
    try {
        const {id} = req.params;
        const result = await books.removeById(id);
        if(!result){
            return res.status(404).json({
                message: "Not found"
            })
        }
        res.status(204).json({
            message: "Delete success"
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error"
        })
    }
})

export default router;