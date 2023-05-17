import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Sequelize } from 'sequelize-typescript';

//Models
import { Profile } from '../database/models/profile.model';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectModel(Profile)
    private profileModel: typeof Profile,
    private sequelize: Sequelize
  ) {}

  async findAll(): Promise<Profile[] | false> {
    const ProfilesList = this.profileModel.findAll();
    if(ProfilesList) return ProfilesList;

    return false;
  }

  async findByEmail(email: string): Promise<Profile | false> {
    const Profile = await this.profileModel.findOne({
      where: {
        email,
      },
    });
    if(Profile) return Profile;
    
    return false;
  }

  async createProfile(body: Partial<Profile>): Promise<Profile | false> {
      const Profile = {
        username: body.username,
        email: body.email,
        phone: body.phone,
      };

      const response = await this.profileModel.create(Profile);
      if(response) return response.dataValues;

      return false;
  }
}