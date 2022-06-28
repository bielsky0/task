import { LogLevel, LogParams } from "../consts/types";

function mapLevelToLogger(level: LogLevel): (...data: any[]) => void {
    switch (level) {
        case LogLevel.INFO:
            return console.info;
        default:
            return console.log;
    }
};

function attachFieldsToMessage(fields: LogParams, msg: string): string {
    return Object.entries(fields).reduce((msg, [key, value]) => `[${key}=${value}] ${msg}`, msg);
};

export function createLogger() {
    function log(level: LogLevel, msg: string, fields: LogParams) {

        const offset = new Date().getTimezoneOffset() * 60000;
        const time = new Date(Date.now() - offset).toISOString().slice(0, -1);

        msg = attachFieldsToMessage({ ...fields }, msg);
        msg = `${time} ${msg}`;

        return mapLevelToLogger(level)(msg);
    }

    return {
        info: (msg: string, fields: LogParams = {}) => log(LogLevel.INFO, msg, fields),
    };
};



export default createLogger();
