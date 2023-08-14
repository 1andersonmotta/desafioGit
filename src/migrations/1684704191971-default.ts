import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684704191971 implements MigrationInterface {
    name = 'Default1684704191971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "git_repository" ADD CONSTRAINT "UQ_ba929a82ba92edffa32bf52222a" UNIQUE ("link")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "git_repository" DROP CONSTRAINT "UQ_ba929a82ba92edffa32bf52222a"`);

    }

}
