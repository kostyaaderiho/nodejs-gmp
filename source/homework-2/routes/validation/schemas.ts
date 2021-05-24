import Joi from 'joi';

const passwordField = Joi.string().pattern(
    new RegExp('^(?=.*[a-z])(?=.*[0-9])(?=.{3,})')
);

export const UserBodySchema = Joi.object({
    login: Joi.string().min(3).max(30).required(),
    password: passwordField.required(),
    age: Joi.number().min(4).max(130).required()
});

export const LoginSchema = Joi.object({
    username: Joi.required(),
    password: passwordField.required()
});
