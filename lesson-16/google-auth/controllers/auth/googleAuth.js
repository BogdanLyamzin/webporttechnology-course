import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const {SECRET_KEY} = process.env;

const googleAuth = async (req, res)=> {
    const {_id: id} = req.user;
    const payload = {
        id,
    };

    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
    res.json(token);
}

export default googleAuth;