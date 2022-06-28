import { Request, Response, NextFunction } from "express";

import Log from '../lib/log'
export const LoggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    let method = req.method;
    let url = req.url;
    let status = res.statusCode;
    Log.info('', { method, url, status })
    next()
}