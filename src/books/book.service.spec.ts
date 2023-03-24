import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { BooksService } from './books.service';
import { Book, BookDocument } from './schemas/book.schema';
import { Model } from 'mongoose';
import { CreateBookDto } from './dto/createBook.dto';

describe('BooksService', () => {
  let booksService: BooksService;
  const bookModel = {
    create: jest.fn().mockResolvedValue({
      _id: '123',
      title: 'Test Book',
      authors: ['Test Author'],
      description: 'Test Description',
    }),
    find: jest.fn(),
    findById: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        {
          provide: getModelToken(Book.name),
          useValue: bookModel,
        },
      ],
    }).compile();

    booksService = module.get<BooksService>(BooksService);
  });

  describe('create', () => {
    it('should create a book', async () => {
      const book: CreateBookDto = {
        title: 'Test Book',
        authors: ['Test Author'],
        description: 'Test Description',
      };

      const createdBook: CreateBookDto = {
        _id: 'qwr1',
        title: 'Test Book',
        authors: ['Test Author'],
        description: 'Test Description',
      };

      const bookM = jest
        .spyOn(bookModel, 'create')
        .mockResolvedValueOnce(createdBook);

      expect(await bookModel.create()).toEqual(createdBook);
    });
  });

  describe('findAllBooks', () => {
    it('should return an array of books', async () => {
      const book: CreateBookDto = {
        _id: 'qwe1',
        title: 'Test Book',
        authors: ['Test Author'],
        description: 'Test Description',
      };

      const bookArray: CreateBookDto[] = [book];

      jest.spyOn(bookModel, 'find').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(bookArray),
      } as any);

      expect(await booksService.findAllBooks()).toEqual(bookArray);
    });
  });

  describe('findOneBooks', () => {
    it('should return a book', async () => {
      const book: CreateBookDto = {
        _id: 'qwe1',
        title: 'Test Book',
        authors: ['Test Author'],
        description: 'Test Description',
      };

      jest.spyOn(bookModel, 'findById').mockReturnValueOnce({
        exec: jest.fn().mockResolvedValueOnce(book),
      } as any);

      expect(await booksService.findOneBooks('qwe1')).toEqual(book);
    });
  });
});
