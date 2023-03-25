import { Test, TestingModule } from '@nestjs/testing';
import { BookCommentController } from './book-comment.controller';
import { BookCommentService } from './book-comment.service';

describe('BookCommentController', () => {
  let controller: BookCommentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookCommentController],
      providers: [BookCommentService],
    }).compile();

    controller = module.get<BookCommentController>(BookCommentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
