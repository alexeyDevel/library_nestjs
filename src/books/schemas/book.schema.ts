import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { IBook } from '../interfaces/IBook';

export type BookDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop({ _id: true, default: new Types.ObjectId() })
  _id: Types.ObjectId;
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
