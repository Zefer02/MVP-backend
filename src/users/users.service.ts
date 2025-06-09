import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async getUser(wallet: string) {
    return await this.usersRepo.findOne({ where: { wallet_address: wallet } });
  }

  async createOrUpdateUser(data: Partial<User>) {
    return await this.usersRepo.save(data);
  }
}
