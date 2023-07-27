import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
    private readonly entityManager: EntityManager,
  ) {}

  async createUser(userData: CreateUserDto) {
    const user = new User(userData);
    const { ...responseData } = await this.entityManager.save(user);
    delete responseData.password;
    return responseData;
  }

  findAll() {
    return this.usersRepository.find();
  }
}
