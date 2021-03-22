import { Schema, Model, Connection } from 'mongoose';
import { User } from '../Users/interfaces/User';
import userConstants from './constants';

class UserModel {
  private readonly connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  private static getSchema(): Schema {
    return new Schema(
      {
        login: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        phone: {
          type: String,
          required: true,
        },
        gender: {
          type: String,
          required: true,
        },
        fullName: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          required: true,
        },
        updatedAt: {
          type: Date,
          required: true,
        },
      },
      {
        collection: 'users',
        versionKey: false,
      },
    );
  }

  public getSelf(): Model<User> {
    return this.connection.model<User>(userConstants.models.users, UserModel.getSchema());
  }
}

export default new UserModel(global.mongodbConnection);
