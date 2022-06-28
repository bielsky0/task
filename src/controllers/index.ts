import { Request, Response, NextFunction } from "express";
import { jsonWebTokenServiceInstance } from "../common";

import { Responses } from "../consts/responses";

import { TypedBodyRequest, Email } from "../consts/types";

export const email = async (req: TypedBodyRequest<Email>, res: Response, next: NextFunction) => {
    try {
        const re = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

        const email = req.body.email;

        const check = re.test(email);

        if (!check) {
            return res.status(Responses.BAD_REQUEST).send({ token: null, message: "Invalid email" })
        }

        const acessToken = await jsonWebTokenServiceInstance.signToken(email);


        res.cookie('access_token', `Bearer ${acessToken}`, {
            httpOnly: true,
            secure: true,
            maxAge: 1000 * 60,
        });

        return res.status(Responses.OK).send({ token: acessToken, message: 'sign in' });

    } catch (err) {
        next(err);
    }
}

export const welcome = async (req: Request, res: Response, next: NextFunction) => {
    try {
        return res.status(Responses.OK).send({ success: true })
    } catch (err) {
        next(err);
    }
}