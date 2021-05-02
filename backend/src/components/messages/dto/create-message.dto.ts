import { ApiProperty } from '@nestjs/swagger';
import { ObjectID } from 'mongodb';

export default class CreateMessageDto {
  @ApiProperty({ type: String })
  readonly text: string = '';

  @ApiProperty({ type: String })
  readonly from: ObjectID = new ObjectID();

  @ApiProperty({ type: String })
  readonly toUserId: ObjectID = new ObjectID();
}
