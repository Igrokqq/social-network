import {
  Body,
  Controller,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import ObjectIdPipe from '@pipes/object-id.pipe';
import { ObjectID } from 'mongodb';
import { UpdateResponse } from '@interfaces/update-response.interface';
import UsersService from './users.service';
import UpdateUserDto from './dto/update.dto';

@Controller('users')
export default class UsersController {
  constructor(private readonly usersService: UsersService) {}

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
