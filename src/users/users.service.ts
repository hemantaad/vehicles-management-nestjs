import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async createUser(userDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(userDto);
    return createdUser.save();
  }

  async queryUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUserDetailById(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async updateUserById(id: string, userDto: UpdateUserDto): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, userDto, { new: true }).exec();
  }

  async deleteUserById(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
