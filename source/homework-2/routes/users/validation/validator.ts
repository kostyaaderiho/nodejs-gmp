import express from 'express';
import Joi from 'joi';

const bodyValidator = (schema: Joi.ObjectSchema) => (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    const { error } = schema.validate(req.body);

    if (!error) {
        next();
    } else {
        res.status(400).send(error.message);
    }
};

export const validator = {
    body: bodyValidator,
};
