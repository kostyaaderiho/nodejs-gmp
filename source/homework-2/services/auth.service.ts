import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { messages, HEADERS } from '../constants';

const JWT_SECRET_KEY = 'jwtsecretkey';

export class AuthService {
    jtwExpiryS: number;

    constructor({ jtwExpiryS } = { jtwExpiryS: 30 }) {
        this.jtwExpiryS = jtwExpiryS;
    }

    login(body: { username: string; password: string }) {
        const token = jwt.sign(body, JWT_SECRET_KEY, {
            expiresIn: this.jtwExpiryS,
        });

        return token;
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
