import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ObjectID } from 'mongodb';
import { InjectModel } from '@nestjs/mongoose';
import friendConstants from './friends.constants';
import { FriendEntity } from './schemas/friends.schema';

@Injectable()
export default class FriendRepository {
  constructor(
    @InjectModel(friendConstants.models.friends) private friendModel: Model<FriendEntity>,
  ) {}

  public getById(friendId: ObjectID): Promise<FriendEntity | null> {
    return this.friendModel.findOne({
      userId: friendId,
      isPending: false,
    }).exec();
  }

  public getPaginated(userId: ObjectID, page: number, limit: number): Promise<FriendEntity[]> {
    return this.friendModel.find({
      userId,
      isPending: false,
    })
      .skip((page + 1) * limit)
      .limit(limit)
      .exec();
  }
}
