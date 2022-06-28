import { JsonWebTokenService } from "../services";

export const jsonWebTokenServiceInstance = new JsonWebTokenService(`${process.env.ACCESS_TOKEN_SECRET}`);
