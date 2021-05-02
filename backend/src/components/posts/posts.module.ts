import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './schemas/posts.schema';
import PostsController from './posts.controller';
import PostsService from './posts.service';
import PostsRepository from './posts.repository';
import postsConstants from './posts.constants';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: postsConstants.models.posts,
      schema: PostSchema,
    }]),
  ],
  controllers: [PostsController],
  providers: [PostsService, PostsRepository],
})
export default class MessagesModule {}
