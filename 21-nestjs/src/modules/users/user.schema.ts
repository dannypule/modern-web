import * as Joi from 'joi';

export const userSchema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    age: Joi.number().min(1).required(),
}).required();