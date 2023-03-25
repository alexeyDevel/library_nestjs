import { Module } from '@nestjs/common';
import { BookCommentService } from './book-comment.service';
import { BookCommentController } from './book-comment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookComment, BookCommentSchema } from './schemas/book-comment.schema';
import { BookCommentGateway } from './book-comment.gateway';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BookComment.name, schema: BookCommentSchema },
    ]),
  ],
  controllers: [BookCommentController],
  providers: [BookCommentService, BookCommentGateway],
})
export class BookCommentModule {}
