import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity } from '../../database/abstract.entity';

@Entity('authuser')
export class User extends AbstractEntity<User> {
  @Column({ unique: true, length: 150, nullable: false })
  username: string;

  @Column({ nullable: false })
  password: string;

  @Column({ length: 150, nullable: true })
  firstName?: string;

  @Column({ length: 150, nullable: true })
  lastName?: string;

  @Column({ default: new Date() })
  createdAt: Date;
}
