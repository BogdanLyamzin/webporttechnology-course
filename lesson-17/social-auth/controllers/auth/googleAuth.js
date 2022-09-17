import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import User from "../../models/user.js";

dotenv.config();

const {SECRET_KEY} = process.env;

const googleAuth = async (req, res)=> {
    const {_id: id} = req.user;
    const payload = {
        id,
    };

    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
    await User.findByIdAndUpdate(id, {token});
    res.json({
        token
    });
}

export default googleAuth;