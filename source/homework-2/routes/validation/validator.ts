import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const bodyValidator = (schema: Joi.ObjectSchema) => (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { error } = schema.validate(req.body);

    if (!error) {
        // eslint-disable-next-line
        next();
    } else {
        res.status(400).send(error.message);
    }
};

export const validator = {
    body: bodyValidator
};
