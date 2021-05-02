import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export default class Json2PlainObject<T> implements PipeTransform<any, T> {
  public transform(value: string): T {
    if (typeof value !== 'string') {
      throw new BadRequestException('The value is not a string');
    }
    return JSON.parse(value);
  }
}
