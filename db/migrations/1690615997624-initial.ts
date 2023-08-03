import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1690615997624 implements MigrationInterface {
    name = 'Initial1690615997624'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "TestModel" ("id" SERIAL NOT NULL, CONSTRAINT "PK_5cbe688ca1c5cde5ad025589a00" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "authuser" ("id" SERIAL NOT NULL, "username" character varying(150) NOT NULL, "password" character varying NOT NULL, "firstName" character varying(150), "lastName" character varying(150), "createdAt" TIMESTAMP NOT NULL DEFAULT '"2023-07-29T07:33:17.907Z"', CONSTRAINT "UQ_0ca57d846b1b8a7e5c2c353c0dc" UNIQUE ("username"), CONSTRAINT "PK_eef6826bbed5c715ee6d2349038" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "authuser"`);
        await queryRunner.query(`DROP TABLE "TestModel"`);
    }

}
