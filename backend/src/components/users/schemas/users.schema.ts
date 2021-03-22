import { ApiProperty } from '@nestjs/swagger';
import { ObjectId } from 'mongodb';
import { Schema, Document, Types } from 'mongoose';
import usersConstants from '../users.constants';

export class UserEntity extends Document {
  @ApiProperty({ type: String })
  readonly _id: Types.ObjectId = new ObjectId();

  @ApiProperty({ type: String })
  readonly email: string = '';

  @ApiProperty({ type: String })
  readonly password: string = '';

  @ApiProperty({ type: String })
  readonly firstName: string = '';

  @ApiProperty({ type: String })
  readonly lastName: string = '';

  @ApiProperty({ type: String })
  readonly phone: string = '';

  @ApiProperty({ type: String })
  readonly gender: string = '';

  @ApiProperty({ type: String })
  readonly login: string = '';

  @ApiProperty({ type: Date })
  readonly createdAt: Date = new Date();

  @ApiProperty({ type: Date })
  readonly updatedAt: Date = new Date();
}

export const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  login: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  versionKey: false,
  timestamps: true,
  collection: usersConstants.models.users,
});
