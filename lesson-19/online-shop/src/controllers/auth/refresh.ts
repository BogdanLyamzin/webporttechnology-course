import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { RequestError } from "../../helpers";

import User from "../../models/user";

import {IPayload} from "../../middlewares/authenticate"

dotenv.config();

const {ACCESS_SECRET_KEY = "", REFRESH_SECRET_KEY = ""} = process.env;

const Refresh = async (req: Request, res: Response, next: NextFunction): Promise<void> | never => {
    try {
        const {accessToken, refreshToken} = req.body;
        const {id} = jwt.verify(accessToken, ACCESS_SECRET_KEY) as IPayload;
        jwt.verify(refreshToken, REFRESH_SECRET_KEY) as IPayload;
        const payload = {
            id,
        }
        const newAccessToken = jwt.sign(payload, ACCESS_SECRET_KEY, {expiresIn: "30m"});
        await User.findByIdAndUpdate(id, {accessToken: newAccessToken});
        res.json({
            accessToken: newAccessToken,
        })
    }
    catch(error: any) {
        const {message = "Unauthorized"} = error;
        const responseError = RequestError(401, message);
        next(responseError);
    }
}

export default Refresh;