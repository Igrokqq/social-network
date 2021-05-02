import { ApiProperty } from '@nestjs/swagger';
import { ObjectID } from 'mongodb';
import { IsNotEmpty, IsString } from 'class-validator';

export default class CreatePostDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  readonly body: string = '';

  @ApiProperty({ type: String })
  @IsNotEmpty()
  readonly from: ObjectID = new ObjectID();
}
