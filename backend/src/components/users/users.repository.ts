import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import SignUpDto from '@components/auth/dto/sign-up.dto';
import { ObjectID } from 'mongodb';
import { UpdateResponse } from '@interfaces/update-response.interface';
import { UserEntity } from './schemas/users.schema';
import usersConstants from './users.constants';
import UpdateUserDto from './dto/update.dto';

@Injectable()
export default class UsersRepository {
  constructor(
    @InjectModel(usersConstants.models.users) private usersModel: Model<UserEntity>,
  ) {}

  public create(user: SignUpDto): Promise<UserEntity> {
    return this.usersModel.create(user);
  }

  public getByEmail(email: string): Promise<UserEntity | null> {
    return this.usersModel.findOne({
      email,
    }).exec();
  }

  public getById(id: ObjectID): Promise<UserEntity | null> {
    return this.usersModel.findOne({
      _id: id,
    }).exec();
  }

  public updateOne(userId: ObjectID, payload: UpdateUserDto): Promise<UpdateResponse> {
    return this.usersModel.updateOne({
      _id: userId,
    }, {
      $set: payload,
    }).exec();
  }

  public async deleteOne(userId: ObjectID): Promise<void> {
    this.usersModel.deleteOne({
      _id: userId,
    }).exec();
  }
}
