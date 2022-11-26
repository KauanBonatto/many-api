// Modules
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

// Controllers
import { UsersController } from '../controllers/user/users.controller';

// Services
import { UsersService } from '../services/users.service';
import { AppService } from 'src/services/app.service';

// Model
import { User } from '../database/models/user.model';

// Entities

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UsersService, AppService],
  controllers: [UsersController],
  exports: [SequelizeModule]
})
export class UsersModule {}