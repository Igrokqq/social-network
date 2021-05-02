import { ApiProperty } from '@nestjs/swagger';
import { ObjectID, ObjectId } from 'mongodb';
import { Schema, Document, Types } from 'mongoose';
import postsConstants from '../posts.constants';

export class PostEntity extends Document {
  @ApiProperty({ type: String })
  readonly _id: Types.ObjectId = new ObjectId();

  @ApiProperty({ type: String })
  readonly body: string = '';

  @ApiProperty({ type: String })
  readonly from: ObjectID = new ObjectID();

  @ApiProperty({ type: Date })
  readonly createdAt: Date = new Date();

  @ApiProperty({ type: Date })
  readonly updatedAt: Date = new Date();
}

export const PostSchema = new Schema({
  body: {
    type: String,
    trim: true,
    required: true,
  },
  from: {
    type: ObjectID,
    required: true,
  },
}, {
  versionKey: false,
  timestamps: true,
  collection: postsConstants.models.posts,
});
