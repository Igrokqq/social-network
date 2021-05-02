import { ApiProperty } from '@nestjs/swagger';
import { ObjectID } from 'mongodb';

export default class MessageHistoryFilterDto {
  @ApiProperty({ type: String })
  readonly from: ObjectID = new ObjectID();

  @ApiProperty({ type: String })
  readonly toUserId: ObjectID = new ObjectID();
}
