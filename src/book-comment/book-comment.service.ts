import { Injectable } from '@nestjs/common';
import { CreateBookCommentDto } from './dto/create-book-comment.dto';
import { UpdateBookCommentDto } from './dto/update-book-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookComment } from './schemas/book-comment.schema';

@Injectable()
export class BookCommentService {
  constructor(
    @InjectModel(BookComment.name) private bookCommentModel: Model<BookComment>,
  ) {}
  create(createBookCommentDto: CreateBookCommentDto) {
    const bookComment = new this.bookCommentModel(createBookCommentDto);
    return bookComment.save();
  }

  findAll() {
    const comments = this.bookCommentModel.find();
    return comments;
  }

  findOne(id: string) {
    const comments = this.bookCommentModel.findById(id);
    return comments;
  }
  findAllByBookId(bookId: number) {
    return this.bookCommentModel.find({ bookId: bookId });
  }

  update(id: string, updateBookCommentDto: UpdateBookCommentDto) {
    return this.bookCommentModel.findByIdAndUpdate(id, updateBookCommentDto);
  }

  remove(id: string) {
    return this.bookCommentModel.findByIdAndRemove(id);
  }
}
