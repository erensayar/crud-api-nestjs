import { Controller, Get, Post, Body, Res, Put, Param, Delete, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './model/dto/create-user.dto';
import { UpdateUserDto } from './model/dto/update-user.dto';
import { UserDocument } from './model/schema/user.schema';

@Controller('users')
export class UserController {


  constructor(private readonly userService: UserService) { }


  @Post()
  async create(@Res({ passthrough: true }) response, @Body() createUserDto: CreateUserDto): Promise<UserDocument> {
    const newUser = await this.userService.create(createUserDto);
    response.status(HttpStatus.CREATED);
    return newUser;
  }


  @Get()
  findAll(@Res({ passthrough: true }) response): Promise<UserDocument[]> {
    const users = this.userService.findAll();
    response.status(HttpStatus.OK);
    return users;
  }


  @Get(':id')
  async findOne(@Res({ passthrough: true }) response, @Param('id') id: string): Promise<UserDocument> {
    const user = await this.userService.findOne(+id);
    response.status(HttpStatus.OK);
    return user;
  }


  @Put(':id')
  async update(@Res({ passthrough: true }) response, @Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<UserDocument> {
    const updatedBook = await this.userService.update(+id, updateUserDto);
    response.status(HttpStatus.OK);
    return updatedBook;
  }


  @Delete(':id')
  async delete(@Res({ passthrough: true }) response, @Param('id') id: string): Promise<UserDocument> {
    const deletedBook = await await this.userService.delete(+id);
    response.status(HttpStatus.OK);
    return deletedBook;
  }


}