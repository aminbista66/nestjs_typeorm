import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

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

  constructor(user: Partial<User>) {
    Object.assign(this, user)
  }
}

@Entity()
export class Test{}
