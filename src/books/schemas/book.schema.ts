import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IBook } from '../interfaces/IBook';

export type BookDocument = HydratedDocument<IBook>;

@Schema()
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop([String])
  authors: string[];
  @Prop()
  favorite: string;
  @Prop()
  fileCover: string;
  @Prop()
  fileName: string;
  @Prop()
  fileBook: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
