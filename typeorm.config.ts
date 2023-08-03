import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';

config();
const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.getOrThrow("POSTGRES_HOST"),
  port: configService.getOrThrow("POSTGRES_PORT"),
  database: configService.getOrThrow("POSTGRES_DATABASE"),
  username: configService.getOrThrow("POSTGRES_USER"),
  password: configService.getOrThrow("POSTGRES_PASSWORD"),
  migrations: ["dist/db/migrations/*.js"],
  entities: ["dist/**/*.entity.js"]
});
