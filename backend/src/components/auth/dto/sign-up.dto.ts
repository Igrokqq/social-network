import {
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsString,
  IsEmail,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class SignUpDto {
  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MinLength(3)
  @MaxLength(128)
  readonly email: string = '';

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(64)
  readonly password: string = '';

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(6)
  readonly gender: string = '';

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(36)
  readonly firstName: string = '';

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(36)
  readonly lastName: string = '';

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(12)
  readonly phone: string = '';

  @ApiProperty({ type: String })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(24)
  readonly login: string = '';
}
