import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  Patch,
} from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(createUserDto);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.queryUsers();
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    return this.usersService.getUserDetailById(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.usersService.updateUserById(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.usersService.deleteUserById(id);
  }
}
