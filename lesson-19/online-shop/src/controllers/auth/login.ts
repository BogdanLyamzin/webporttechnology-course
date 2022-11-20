import {Request, Response} from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import User, {IUser} from "../../models/user";
import { RequestError } from "../../helpers";

dotenv.config();

const {ACCESS_SECRET_KEY = "", REFRESH_SECRET_KEY = ""} = process.env;

const login = async (req: Request, res: Response): Promise<void> | never => {
    const {email, password} = req.body;
    const user: IUser | null = await User.findOne({email});
    if(!user){
        throw RequestError(401, "Email not found");
    }
    console.log(user.password);
    if(!bcrypt.compare(password, user.password)) {
        throw RequestError(401, "Password wrong");
    }
    const payload = {
        id: user._id,
    }
    const accessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {expiresIn: "30m"});
    const refreshToken = jwt.sign(payload, REFRESH_SECRET_KEY, {expiresIn: "1w"});
    await User.findByIdAndUpdate(user._id, {token: accessToken});
    res.json({
        email: user.email,
        accessToken,
        refreshToken,
    })
}

export default login;