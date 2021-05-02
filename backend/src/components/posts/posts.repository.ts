import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { ObjectID } from 'mongodb';
import { PostEntity } from './schemas/posts.schema';
import CreatePostDto from './dto/create.dto';
import postsConstants from './posts.constants';

@Injectable()
export default class MessagesRepository {
  constructor(
    @InjectModel(postsConstants.models.posts) private postsModel: Model<PostEntity>,
  ) {}

  createOne(post: CreatePostDto): Promise<PostEntity> {
    return this.postsModel.create(post);
  }

  getUserPosts(userId: ObjectID): Promise<PostEntity[]> {
    return this.postsModel.find({
      from: userId,
    }).lean().exec();
  }
}
