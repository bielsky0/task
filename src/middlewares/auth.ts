import { Request, Response, NextFunction } from "express";
import { jsonWebTokenServiceInstance } from "../common";
import { Responses } from "../consts/responses";
import { Cookies, TypedCookieRequest } from "../consts/types";

export const auth = async (req: TypedCookieRequest<Cookies>, res: Response, next: NextFunction) => {
    try {
        const bearer = req.cookies.access_token;

        if (!bearer || !bearer.startsWith('Bearer ')) {
            return res.status(Responses.UNAUTHORIZED).send({ message: 'You must enter your email first' });
        }

        const token = bearer.split('Bearer ')[1].trim();
        if (!token) return res.sendStatus(Responses.UNAUTHORIZED);

        const emailFromToken = await jsonWebTokenServiceInstance.verifyToken(token);
        if (!emailFromToken) return res.sendStatus(Responses.FORBIDDEN);

        next();
    } catch (e) {
        return res.status(Responses.UNAUTHORIZED).send({ message: 'Unauthorized' });
    }
}
