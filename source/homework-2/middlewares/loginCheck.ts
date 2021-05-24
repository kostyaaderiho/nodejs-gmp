import { Request, Response, NextFunction } from 'express';

import { AuthService } from '../services/auth.service';

export const loginCheck = (...params: [Request, Response, NextFunction]) => {
    return new AuthService().loginCheck(...params);
};
