import { Sequelize } from 'sequelize-typescript';

// Modules
import { Module } from '@nestjs/common';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { UsersModule } from './modules/users.module';
import { ProfilesModule } from './modules/profiles.module';

// Services
import { AppService } from './services/app.service';
import { UsersService } from './services/users.service';
import { ProfilesService } from './services/profiles.service';

// Entitis

// Models
import { User } from './database/models/user.model';

// Controllers
import { UsersController } from './controllers/user/users.controller';
import { ProfilesController } from './controllers/profile/profiles.controller';

const db: SequelizeModuleOptions = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'oneOfM@ny!112358',
  database: 'many_db',
  models: [User],
  autoLoadModels: true,
  synchronize: true,
};

@Module({
  imports: [
    SequelizeModule.forRoot(db),
    UsersModule,
    ProfilesModule
  ],
  controllers: [UsersController, ProfilesController],
  providers: [AppService, UsersService, ProfilesService]
})
export class AppModule {
  constructor(private sequelize: Sequelize) {
    console.log(sequelize);
  }

}
