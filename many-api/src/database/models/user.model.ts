import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column({ 
    primaryKey: true,
    autoIncrement: true,
    unique: true 
  })
  id: number;
  
  @Column
  email: string;

  @Column
  phone: string;

  @Column
  password: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}