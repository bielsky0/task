import jwt from 'jsonwebtoken';

export class JsonWebTokenService {
    readonly accessTokenSecret: string

    constructor(accessTokenSecret: string) {
        this.accessTokenSecret = accessTokenSecret
    }

    async signToken(email: string) {
        return new Promise((resolve, reject) => {
            jwt.sign(
                { id: email },
                this.accessTokenSecret,
                { expiresIn: '60s' },
                (err, payload) => {
                    if (err) return reject(err);

                    return resolve(payload);
                },
            );
        });
    }

    async verifyToken(token: string) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this.accessTokenSecret, (err, payload) => {
                if (err) return reject(err);

                return resolve(payload);
            });
        });
    }
}