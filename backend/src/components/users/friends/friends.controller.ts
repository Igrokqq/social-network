import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ObjectID } from 'mongodb';
import ObjectIdPipe from '@pipes/object-id.pipe';
import { DecodedUser } from '@components/auth/interfaces/decoded-user.interface';
import AuthService from '@components/auth/auth.service';
import BearerToken from '@decorators/bearer-token.decorator';
import { FriendEntity } from './schemas/friends.schema';
import FriendService from './friends.service';

@Controller('friends')
export default class FriendController {
  constructor(
    private readonly friendService: FriendService,
    private readonly authService: AuthService,
  ) {}

  @Get('page/:page/limit/:limit')
  public async getPaginated(
    @BearerToken() accessToken: string,
    @Param('page', ParseIntPipe) page: number,
    @Param('limit', ParseIntPipe) limit: number,
  ): Promise<FriendEntity[]> {
    const { id: userId } = await this.authService.verifyToken(
      accessToken,
      process.env.JWT_ACCESS_TOKEN_SECRET || '',
    ) as DecodedUser;

    return this.friendService.getPaginated(userId, page, limit);
  }

  @Get(':friendId')
  public getById(@Param('friendId', ObjectIdPipe) friendId: ObjectID): Promise<FriendEntity | null> {
    return this.friendService.getById(friendId);
  }
}
