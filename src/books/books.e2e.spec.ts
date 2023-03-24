import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import { BooksModule } from './books.module';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { CreateBookDto } from './dto/createBook.dto';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import process from 'process';
import * as dotenv from 'dotenv';
import { JwtAuthGuard } from '../auth/guards/jwt.auth.guard';
import { MockGuard } from '../auth/guards/mock.guard';
dotenv.config({
  path: '../../.env',
});

describe('BooksE2E', () => {
  let app: INestApplication;
  const book: CreateBookDto = {
    _id: 'qwe1',
    title: 'Test Book',
    authors: ['Test Author'],
    description: 'Test Description',
  };
  jest.setTimeout(15000);
  const bookArray: CreateBookDto[] = [book];
  const booksService = {
    findAll: () => {
      return bookArray;
    },
    findBooks: jest.fn(),
    put: jest.fn(),
    findAllBooks: jest.fn().mockResolvedValue(bookArray),
    findOneBooks: jest.fn().mockImplementation((id) => {
      const foundBook = bookArray.find((book) => book._id === id);
      return Promise.resolve(foundBook);
    }),
    create: jest.fn().mockImplementation((bookDto) => {
      const newBook = {
        _id: 'newId',
        ...bookDto,
      };
      return Promise.resolve(newBook);
    }),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        BooksModule,
        MongooseModule.forRoot(
          'mongodb+srv://admin:Nk10sfjjx4Ycxm4z@cluster0.1tvpdns.mongodb.net/libraryNest',
        ),
      ],
      providers: [BooksService],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue(new MockGuard())
      .overrideProvider(BooksService)
      .useValue(booksService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET books`, () => {
    return request(app.getHttpServer()).get('/books').expect(200).expect({
      status: 'success',
      data: bookArray,
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
