import Joi from 'joi';

export const BodySchema = Joi.object({
    login: Joi.string().min(3).max(30).required(),
    password: Joi.string()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[0-9])(?=.{3,})'))
        .required(),
    age: Joi.number().min(4).max(130).required()
});
