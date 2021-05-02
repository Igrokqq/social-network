import { Injectable } from '@nestjs/common';
import { ObjectID } from 'mongodb';
import PostsRepository from './posts.repository';
import { PostEntity } from './schemas/posts.schema';
import CreatePostDto from './dto/create.dto';

@Injectable()
export default class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  createOne(post: CreatePostDto): Promise<PostEntity> {
    return this.postsRepository.createOne(post);
  }

  getUserPosts(userId: ObjectID): Promise<PostEntity[]> {
    return this.postsRepository.getUserPosts(userId);
  }
}
