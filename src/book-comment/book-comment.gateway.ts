import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { CreateBookCommentDto } from './dto/create-book-comment.dto';
import { BookCommentService } from './book-comment.service';

@WebSocketGateway({ cors: true })
export class BookCommentGateway {
  constructor(private readonly bookCommentService: BookCommentService) {}
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
  @SubscribeMessage('addComment')
  addComment(
    @MessageBody() createBookCommentDto: CreateBookCommentDto,
    @ConnectedSocket() client: Socket,
  ) {
    return this.bookCommentService.create(createBookCommentDto);
  }
  @SubscribeMessage('allComments')
  getAllComments(@MessageBody() bookId: number) {
    return this.bookCommentService.findAllByBookId(bookId);
  }
}
