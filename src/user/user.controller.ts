import { Controller, Get, Post, Body, Res, Put, Param, Delete, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './model/dto/create-user.dto';
import { UpdateUserDto } from './model/dto/update-user.dto';

@Controller('users')
export class UserController {


  constructor(private readonly userService: UserService) { }


  @Post()
  create(@Res() response, @Body() createUserDto: CreateUserDto) {
    const newUser = this.userService.create(createUserDto);
    return response.status(HttpStatus.CREATED).json({ newUser })
  }


  @Get()
  findAll(@Res() response) {
    const users = this.userService.findAll();
    return response.status(HttpStatus.OK).json({ users })
  }


  @Get(':id')
  findOne(@Res() response, @Param('id') id: string) {
    const user = this.userService.findOne(+id);
    return response.status(HttpStatus.OK).json({ user });
  }


  @Put(':id')
  update(@Res() response, @Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const updatedBook = this.userService.update(+id, updateUserDto);
    return response.status(HttpStatus.OK).json({ updatedBook })
  }


  @Delete(':id')
  delete(@Res() response, @Param('id') id: string) {
    const deletedBook = this.userService.delete(+id);
    return response.status(HttpStatus.OK).json({ deletedBook })
  }


}