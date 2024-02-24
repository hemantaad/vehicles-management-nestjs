import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly username: string;

  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}

export class UpdateUserDto {
  @IsString()
  readonly name?: string;

  @IsString()
  readonly username?: string;

  @IsString()
  readonly email?: string;

  @IsString()
  readonly password?: string;
}
