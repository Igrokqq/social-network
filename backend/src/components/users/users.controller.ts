import {
  Body,
  Controller,
  Param,
  Put,
  Get,
  Delete,
  UseGuards,
} from '@nestjs/common';
import ObjectIdPipe from '@pipes/object-id.pipe';
import { ObjectID } from 'mongodb';
import { UpdateResponse } from '@interfaces/update-response.interface';
import JwtAccessGuard from '@guards/jwt-access.guard';
import UsersService from './users.service';
import UpdateUserDto from './dto/update.dto';
import { UserEntity } from './schemas/users.schema';

@UseGuards(JwtAccessGuard)
@Controller('users')
export default class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('search/:searchText')
  public async getAllWithPaginationBySearchText(
    @Param('searchText') searchText: string,
  ): Promise<UserEntity[]> {
    return this.usersService.getAllWithPaginationBySearchText(searchText);
  }

  @Put(':userId')
  public update(
    @Param('userId', ObjectIdPipe) userId: ObjectID,
    @Body() payload: UpdateUserDto,
  ): Promise<UpdateResponse> {
    return this.usersService.updateOne(userId, payload);
  }

  @Delete(':userId')
  public closeAccount(@Param('userId', ObjectIdPipe) userId: ObjectID): Promise<void> {
    return this.usersService.deleteOne(userId);
  }
}
