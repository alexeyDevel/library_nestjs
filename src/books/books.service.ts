import { Injectable, RequestTimeoutException } from '@nestjs/common';
import { IBook } from './interfaces/IBook';
import { booksMock } from '../mocks/books';
import { v4 as uuidv4 } from 'uuid';
import { CreateBookDto } from './dto/createBook.dto';

@Injectable()
export class BooksService {
  private readonly books: IBook[] = booksMock;
  async create(book: CreateBookDto): Promise<IBook> {
    const newBook: IBook = {
      id: uuidv4(),
      description: book.description ? book.description : '',
      title: book.title ? book.title : '',
      authors: book.authors ? book.authors : [],
      favorite: book.favorite ? book.favorite : '',
      fileCover: book.fileCover ? book.fileCover : '',
      fileName: book.fileName ? book.fileName : '',
      fileBook: book.fileBook ? book.fileBook : '',
    };
    this.books.push(newBook);

    return newBook;
  }
  async findAllBooks(): Promise<IBook[]> {
    return this.books;
  }
}
