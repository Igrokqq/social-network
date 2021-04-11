import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';
import { Schema, Document, Types } from 'mongoose';
import friendConstants from '../friends.constants';

export class FriendEntity extends Document {
  @ApiProperty({ type: String })
  readonly _id: Types.ObjectId = new ObjectId();

  @ApiProperty({ type: String })
  readonly userId: Types.ObjectId = new ObjectId();

  @ApiProperty({ type: String })
  readonly friendId: Types.ObjectId = new ObjectId();

  @ApiProperty({ type: Boolean })
  readonly isPending: boolean = true;

  @ApiProperty({ type: Date })
  readonly createdAt: Date = new Date();

  @ApiProperty({ type: Date })
  readonly updatedAt: Date = new Date();
}

export const FriendSchema = new Schema({
  userId: {
    type: Types.ObjectId,
    required: true,
  },
  friendId: {
    type: Types.ObjectId,
    required: true,
  },
  isPending: {
    type: Boolean,
    required: false,
    default: true,
  },
}, {
  versionKey: false,
  timestamps: true,
  collection: friendConstants.models.friends,
});
