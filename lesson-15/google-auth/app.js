import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import logger from "morgan";

import authRouter from "./routes/pages/auth.js";

dotenv.config();

const {DB_HOST, PORT = 3000} = process.env;

const app = express();

const formatLogger = "dev";

app.use(cors());
app.use(logger(formatLogger))

app.use("/auth", authRouter);

app.get("/", (req, res)=> {
    res.send("<h2>Main page</h2>")
})

mongoose.connect(DB_HOST)
    .then(()=> app.listen(PORT))
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    })