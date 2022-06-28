import { Request } from "express";

export interface TypedBodyRequest<T> extends Request {
    body: T;
};

export interface TypedCookieRequest<T> extends Request {
    cookies: T;
};

export interface Cookies {
    access_token: string;
}

export interface Email {
    email: string;
};

export type LogParams = {
    [k: string]: any;
};

export type Logger = {
    info: (msg: string, params?: LogParams) => void;
};


export enum LogLevel {
    INFO = 'INFO',
}
