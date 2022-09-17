import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import * as api from "./routes/api/index.js";
import * as pages from "./routes/pages/index.js";

dotenv.config();

const {DB_HOST, PORT = 3000} = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", api.auth);
app.use("/pages/auth", pages.auth);

app.use((req, res)=> {
    const {url} = req;
    res.status(404).json({
        message: `URL "${url}" Not found`
    })
});

app.use((error, _, res, __) => {
    const {status = 500, message = "Server error"} = error;
    res.status(status).json({
        message,
    }) 
});

mongoose.connect(DB_HOST)
    .then(()=> app.listen(PORT))
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    })