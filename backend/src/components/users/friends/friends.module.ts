import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import AuthModule from '@components/auth/auth.module';
import { FriendSchema } from './schemas/friends.schema';
import friendConstants from './friends.constants';
import FriendService from './friends.service';
import FriendRepository from './friends.repository';
import FriendController from './friends.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: friendConstants.models.friends,
      schema: FriendSchema,
    }]),
    AuthModule,
  ],
  controllers: [FriendController],
  providers: [FriendService, FriendRepository],
  exports: [FriendService, FriendRepository],
})
export default class UsersModule {}
