import {
  Body, Controller, Get, Param, Post,
} from '@nestjs/common';
import ObjectIdPipe from '@pipes/object-id.pipe';
import { ObjectID } from 'mongodb';
import PostsService from './posts.service';
import { PostEntity } from './schemas/posts.schema';
import CreatePostDto from './dto/create.dto';

@Controller('posts')
export default class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() post: CreatePostDto): Promise<PostEntity> {
    return this.postsService.createOne(post);
  }

  @Get(':userId')
  getUserPosts(@Param('userId', ObjectIdPipe) userId: ObjectID): Promise<PostEntity[]> {
    return this.postsService.getUserPosts(userId);
  }
}
