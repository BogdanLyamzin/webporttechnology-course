import express from "express";
import dotenv from "dotenv";

dotenv.config();

const {APP_URL} = process.env;

const router = express.Router();

router.get("/", (req, res)=> {
    res.send(`<a href="${APP_URL}/api/auth/google">Login with Google</a>`)
});

export default router;