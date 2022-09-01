import { Request, Response, NextFunction } from "express";
import jwt, {JwtPayload} from "jsonwebtoken";
import dotenv from "dotenv";

import User, {IUser} from "../models/user";

import { RequestError } from "../helpers";

dotenv.config();

const {SECRET_KEY = ""} = process.env;

/*
1. Отримати із заголовків authorization.
2. Розділити заголовок на 2 слова по пробілу.
3. Якщо перше слово не є "Bearer" - повернути 401 помилку.
4. Перевірити чи ми видавали токен за допомогою jwt.verify.
5. Якщо ми не видавали токен або строк його дії закінчився - повернути 401 помилку.
6. Знайти у базі користувача з таким id.
7. Якщо його немає - повернути 401 помилку.
8. Якщо він є - додаємо до об'єкту request його у властивість user:
req.user = user;
10. Передаємо обробку запиту далі
*/

interface IPayload extends JwtPayload {
    id?: any
}

export interface IRequest extends Request {
    user?: IUser | null
}

const authenticate = async(req: IRequest, res: Response, next: NextFunction): Promise<void> => {
    const {authorization = ""} = req.headers;
    const [bearer, token] = authorization.split(" ");
    if(bearer !== "Bearer") {
        const error = RequestError(401, "Token invalid");
        next(error);
    }

    try {
        const payload: IPayload | string = jwt.verify(token, SECRET_KEY);
        // @ts-ignore
        const user: IUser | null = await User.findById(payload?.id);
        if(!user) {
            next(RequestError(401, "User not found"));
        }
        req.user = user;
        next();
    } catch (error: any) {
        const {message = "Unauthorized"} = error;
        const responseError = RequestError(401, message);
        next(responseError);
    }
}

export default authenticate;