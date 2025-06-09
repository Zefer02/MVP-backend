import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':wallet')
  getUser(@Param('wallet') wallet: string) {
    return this.usersService.getUser(wallet);
  }

  @Post()
  createOrUpdateUser(@Body() userData: Partial<User>) {
    return this.usersService.createOrUpdateUser(userData);
  }
}
