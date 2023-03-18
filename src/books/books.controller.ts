import {
  Body,
  Controller, ForbiddenException,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
  UsePipes
} from "@nestjs/common";
import { BooksService } from './books.service';
import { CreateBookDto, createBookSchema } from './dto/createBook.dto';
import { ExeptionInterceptor } from './exeption.interceptor';
import { ValidationPipe } from './pipes/validation.pipe';
import { JoiValidationPipe } from './pipes/joiValidation.pipe';
import { HttpExceptionFilter } from './http-exception.filter';

@UseInterceptors(ExeptionInterceptor)
@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}
  @Get()
  findAll() {
    const books = this.bookService.findAllBooks();

    return books;
  }
  @UsePipes(ValidationPipe)
  @Get('/:id')
  findBooks(@Param('id') id: string) {
    return id;
  }
  @UsePipes(new JoiValidationPipe(createBookSchema))
  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Put()
  @UseFilters(new HttpExceptionFilter())
  async put() {
    throw new ForbiddenException();
  }
}
