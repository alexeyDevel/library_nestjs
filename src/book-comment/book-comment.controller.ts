import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookCommentService } from './book-comment.service';
import { CreateBookCommentDto } from './dto/create-book-comment.dto';
import { UpdateBookCommentDto } from './dto/update-book-comment.dto';

@Controller('book-comment')
export class BookCommentController {
  constructor(private readonly bookCommentService: BookCommentService) {}

  @Post()
  create(@Body() createBookCommentDto: CreateBookCommentDto) {
    return this.bookCommentService.create(createBookCommentDto);
  }

  @Get()
  findAll() {
    return this.bookCommentService.findAll();
  }
  @Get('bookId/:id')
  findAllBookComment(@Param('id') id: number) {
    return this.bookCommentService.findAllByBookId(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookCommentService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBookCommentDto: UpdateBookCommentDto,
  ) {
    return this.bookCommentService.update(id, updateBookCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookCommentService.remove(id);
  }
}
