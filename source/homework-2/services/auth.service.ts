import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { messages, HEADERS, JWT_SECRET_KEY } from '../constants';

export class AuthService {
    jwtExpiryS: number;

    constructor({ jwtExpiryS } = { jwtExpiryS: 30 }) {
        this.jwtExpiryS = jwtExpiryS;
    }

    signin(body: { username: string; password: string }) {
        return jwt.sign(body, JWT_SECRET_KEY, {
            expiresIn: this.jwtExpiryS
        });
    }

    loginCheck(req: Request, res: Response, next: NextFunction) {
        const token = req.header(HEADERS.authorization);

        if (token) {
            jwt.verify(token, JWT_SECRET_KEY, (err) => {
                if (err) {
                    res.status(403).json({ message: messages['403'] });
                } else {
                    return next();
                }
            });
        } else {
            res.status(401).send({ message: messages['401'] });
        }
    }
}
