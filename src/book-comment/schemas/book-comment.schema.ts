import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Book } from '../../books/schemas/book.schema';

export type BookCommentDocument = BookComment & Document;

@Schema()
export class BookComment {
  @Prop({ required: true })
  bookId: number;

  @Prop({ required: true })
  comment: string;
}

export const BookCommentSchema = SchemaFactory.createForClass(BookComment);
