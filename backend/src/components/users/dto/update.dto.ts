import SignUpDto from '@components/auth/dto/sign-up.dto';
import { PartialType } from '@nestjs/swagger';

export default class UpdateUserDto extends PartialType(SignUpDto) {}
