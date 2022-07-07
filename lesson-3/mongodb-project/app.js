import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const {DB_HOST} = process.env;

mongoose.connect(DB_HOST)
    .then(()=> console.log("Database connect success"))
    .catch((error) => error.message);