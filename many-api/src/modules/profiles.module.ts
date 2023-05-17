// Modules
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

// Controllers
import { ProfilesController } from '../controllers/profile/profiles.controller';

// Services
import { ProfilesService } from '../services/profiles.service';
import { AppService } from 'src/services/app.service';

// Model
import { Profile } from '../database/models/profile.model';

// Entities

@Module({
  imports: [SequelizeModule.forFeature([Profile])],
  providers: [ProfilesService, AppService],
  controllers: [ProfilesController],
  exports: [SequelizeModule]
})
export class ProfilesModule {}