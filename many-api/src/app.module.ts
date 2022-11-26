import { Sequelize } from 'sequelize-typescript';

// Modules
import { Module } from '@nestjs/common';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { UsersModule } from './modules/users.module';

// Services
import { AppService } from './services/app.service';
import { UsersService } from './services/users.service';

// Entitis

// Models
import { User } from './database/models/user.model';


import { UsersController } from './controllers/user/users.controller';

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
  ],
  controllers: [UsersController],
  providers: [AppService, UsersService]
})
export class AppModule {
  constructor(private sequelize: Sequelize) {
    console.log(sequelize);
  }

}
