import { ApiProperty } from '@nestjs/swagger';
import { ObjectID, ObjectId } from 'mongodb';
import { Schema, Document, Types } from 'mongoose';
import messagesConstants from '../messages.constants';

export class MessageEntity extends Document {
  @ApiProperty({ type: String })
  readonly _id: Types.ObjectId = new ObjectId();

  @ApiProperty({ type: String })
  readonly text: string = '';

  @ApiProperty({ type: String })
  readonly toUserId: ObjectID = new ObjectID();

  @ApiProperty({ type: String })
  readonly from: ObjectID = new ObjectID();

  @ApiProperty({ type: Date })
  readonly createdAt: Date = new Date();

  @ApiProperty({ type: Date })
  readonly updatedAt: Date = new Date();
}

export const MessageSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: true,
  },
  from: {
    type: ObjectID,
    required: true,
  },
  toUserId: {
    type: ObjectID,
    required: true,
  },
}, {
  versionKey: false,
  timestamps: true,
  collection: messagesConstants.models.messages,
});
