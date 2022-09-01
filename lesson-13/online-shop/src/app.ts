import express, {Express, Request, Response, NextFunction} from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import * as routes from "./routes/api"

import {IRequestError} from "./interfaces";

dotenv.config();

const {DB_HOST = "", PORT = 3000} = process.env;

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", routes.auth);
app.use("/api/products", routes.products);
app.use("/api/categories", routes.categories);
app.use("/api/orders", routes.orders);

app.use((req: Request, res: Response): void => {
    const {url} = req;
    res.status(404).json({
        message: `${url} not found`,
    })
});

app.use((error: IRequestError, req: Request, res: Response, next: NextFunction): void => {
    const {status = 500, message = "Server error"} = error;
    res.status(status).json({
        message,
    })
});

mongoose.connect(DB_HOST)
    .then(()=>app.listen(PORT))
    .catch((error: Error): void => {
        console.log(error.message);
        process.exit(1);
    })