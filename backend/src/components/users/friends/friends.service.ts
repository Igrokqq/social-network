import { Injectable } from '@nestjs/common';
import { ObjectID } from 'mongodb';
import { FriendEntity } from './schemas/friends.schema';
import FriendRepository from './friends.repository';

@Injectable()
export default class FriendService {
  constructor(private readonly friendRepository: FriendRepository) {}

  public getById(friendId: ObjectID): Promise<FriendEntity | null> {
    return this.friendRepository.getById(friendId);
  }

  public getPaginated(userId: ObjectID, page: number, limit: number): Promise<FriendEntity[]> {
    return this.friendRepository.getPaginated(userId, page, limit);
  }
}
