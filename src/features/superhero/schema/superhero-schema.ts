import Joi, { ObjectSchema } from 'joi';

// Define schema for superhero creation

export const superheroSchema: ObjectSchema = Joi.object().keys({
  name: Joi.string().min(3).max(50).required().messages({
    'string.base': 'Name should be of type string',
    'string.min': 'Name should have at least 3 characters',
    'string.max': 'Name can have a maximum of 50 characters',
    'string.empty': 'Name is a required field',
  }),

  superpower: Joi.string().min(3).max(100).required().messages({
    'string.base': 'Superpower should be of type string',
    'string.min': 'Superpower should have at least 3 characters',
    'string.max': 'Superpower can have a maximum of 100 characters',
    'string.empty': 'Superpower is a required field',
  }),

  humilityScore: Joi.number().integer().min(1).max(10).required().messages({
    'number.base': 'Humility score should be a number',
    'number.integer': 'Humility score should be an integer',
    'number.min': 'Humility score must be at least 1',
    'number.max': 'Humility score can be at most 10',
    'number.empty': 'Humility score is a required field',
  }),
});
