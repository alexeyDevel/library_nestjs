import { Injectable, RequestTimeoutException } from '@nestjs/common';
import { IBook } from './interfaces/IBook';
import { booksMock } from '../mocks/books';
import { v4 as uuidv4 } from 'uuid';
import { CreateBookDto } from './dto/createBook.dto';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { Connection, Model } from 'mongoose';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(Book.name) private bookModel: Model<BookDocument>,
    @InjectConnection() private connection: Connection,
  ) {}
  private readonly books: IBook[] = booksMock;
  async create(book: CreateBookDto): Promise<IBook> {
    const createBook = new this.bookModel(book);
    return createBook.save();
  }
  async findAllBooks(): Promise<IBook[]> {
    return this.bookModel.find().exec();
  }
}
