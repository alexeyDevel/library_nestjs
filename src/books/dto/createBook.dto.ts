import * as Joi from 'joi';

export class CreateBookDto implements CreateBookDto {
  _id?: string;
  title: string;
  description?: string;
  authors?: string[];
  favorite?: string;
  fileCover?: string;
  fileName?: string;
  fileBook?: string;
}
export const createBookSchema = Joi.object({
  title: Joi.string().min(2).required(),
  description: Joi.string(),
  authors: Joi.string(),
  favorite: Joi.string(),
  fileCover: Joi.string(),
  fileName: Joi.string(),
  fileBook: Joi.string(),
});

export interface CreateBookDto {
  title: string;
  description?: string;
  authors?: string[];
  favorite?: string;
  fileCover?: string;
  fileName?: string;
  fileBook?: string;
}
