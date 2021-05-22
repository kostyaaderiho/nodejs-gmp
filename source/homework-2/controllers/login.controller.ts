import { Request, Response } from 'express';

import { AuthService } from '../services/auth.service';

export const login = async ({ body }: Request, res: Response) => {
    res.send(new AuthService().login(body));
};
