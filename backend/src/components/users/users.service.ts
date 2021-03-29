import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import SignUpDto from '@components/auth/dto/sign-up.dto';
import authConstants from '@components/auth/auth.constants';
import { ObjectID } from 'mongodb';
import { UpdateResponse } from '@interfaces/update-response.interface';
import { UserEntity } from './schemas/users.schema';
import UsersRepository from './users.repository';
import UpdateUserDto from './dto/update.dto';

@Injectable()
export default class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  public async create(user: SignUpDto): Promise<UserEntity> {
    const hashedPassword = await bcrypt.hash(user.password, authConstants.salts.password);

    return this.usersRepository.create({
      ...user,
      password: hashedPassword,
    });
  }

  public getById(id: ObjectID): Promise<UserEntity | null> {
    return this.usersRepository.getById(id);
  }

  public updateOne(userId: ObjectID, payload: UpdateUserDto): Promise<UpdateResponse> {
    return this.usersRepository.updateOne(userId, payload);
  }
}
