import {
  // eslint-disable-next-line prettier/prettier
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadGatewayException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class ExeptionInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => ({ status: 'success', data })),
      catchError((err) => {
        return throwError(new BadGatewayException({ status: 'fail', err }));
      }),
    );
  }
}
