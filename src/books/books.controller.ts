import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/createBook.dto';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}
  @Get()
  findAll() {
    const books = this.bookService.findAllBooks();

    return books;
  }
  @Post()
  create(@Body() dto: CreateBookDto) {
    return this.bookService.create(dto);
  }
}
