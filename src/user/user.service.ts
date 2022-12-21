import { CreateUserDto } from './model/dto/create-user.dto';
import { UpdateUserDto } from './model/dto/update-user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDocument } from 'src/user/model/schema/user.schema';

@Injectable()
export class UserService {
  

  constructor(@InjectModel('User') private userModel: Model<UserDocument>) { }


  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    console.log(createUserDto);
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }


  async findOne(id: number): Promise<UserDocument> {
    const userInDb = await this.userModel.findById(id).exec();
    if (!userInDb) {
      throw new NotFoundException(`User not found. User : #${id}`);
    }
    return userInDb;
  }


  async findAll(): Promise<UserDocument[]> {
    const users = await this.userModel.find().exec();
    if (!users || users.length == 0) {
      throw new NotFoundException('User data not found!');
    }
    return users;
  }


  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserDocument> {
    console.log(`This action updates a #${id} user`);
    const userInDb = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
    if (!userInDb) {
      throw new NotFoundException(`User not found. User Id : #${id}`);
    }
    return userInDb;
  }


  async delete(id: number): Promise<UserDocument> {
    const userInDb = await this.userModel.findByIdAndDelete(id);
    if (!userInDb) {
        throw new NotFoundException(`Student not found. Strudent Id : #${id}`);
    }
    return userInDb;
  }

}