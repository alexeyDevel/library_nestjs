import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import { isNumber } from '@nestjs/common/utils/shared.utils';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(id: any, metadata: ArgumentMetadata) {
    const num = parseInt(id);
    return isNaN(num) ? `${id} is not a number` : `${id} is number`;
  }
}
