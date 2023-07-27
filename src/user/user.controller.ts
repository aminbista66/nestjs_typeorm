import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create/')
  createUser(@Body() userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }

  @Get('users/')
  findAll() {
    return this.userService.findAll();
  }
}
