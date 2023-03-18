import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}

  transform(createBookDto: any, metadata: ArgumentMetadata) {
    console.log(createBookDto);
    const { error } = this.schema.validate(createBookDto);
    if (error) {
      throw new BadRequestException('Validation failed');
    }
    return createBookDto;
  }
}
