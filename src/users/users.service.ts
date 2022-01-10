import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.UserModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.UserModel.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.UserModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateUserDto,
      },
      {
        new: true,
      },
    );
  }
  async remove(id: string) {
    return this.UserModel.findByIdAndDelete(id);
  }
}
