import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Profile extends Model {
  @Column({ 
    primaryKey: true,
    autoIncrement: true,
    unique: true 
  })
  id: number;
  
  @Column
  username: string;

  @Column
  email: string;

  @Column
  phone: string;

  @Column
  profileImage: string;

  @Column
  backgroundImage: string;

  @Column
  signo: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}