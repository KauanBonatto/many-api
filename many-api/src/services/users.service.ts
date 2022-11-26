import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Sequelize } from 'sequelize-typescript';

//Models
import { User } from '../database/models/user.model';

// Entities

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    private sequelize: Sequelize
  ) {}

  async findAll(): Promise<User[] | false> {

    const usersList = this.userModel.findAll();
    if(usersList) return usersList;

    return false;
  }

  async findByEmail(email: string): Promise<User | false> {
    const user = await this.userModel.findOne({
      where: {
        email,
      },
    });
    if(user) return user;
    
    return false;
  }

  async createUser(body: Partial<User>): Promise<User | false> {
      const user = {
        email: body.email,
        phone: body.phone,
        password: body.password
      };

      const response = await this.userModel.create(user);
      if(response) return response.dataValues;

      return false;
  }
}