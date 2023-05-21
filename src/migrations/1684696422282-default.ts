import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684696422282 implements MigrationInterface {
    name = 'Default1684696422282'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "favorite_repository" ("ip" character varying NOT NULL, "id_git_repository" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_90735427edd6e145ee36c424bd9" PRIMARY KEY ("ip", "id_git_repository"))`);
        await queryRunner.query(`CREATE TABLE "git_repository" ("id" SERIAL NOT NULL, "owner" character varying NOT NULL, "language" character varying NOT NULL, "link" character varying NOT NULL, "description" character varying NOT NULL, "stars" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8c878d10bb91fdb8d9555be1bba" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "favorite_repository" ADD CONSTRAINT "FK_25bcdeedf65113cfb3985f16f06" FOREIGN KEY ("id_git_repository") REFERENCES "git_repository"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "favorite_repository" DROP CONSTRAINT "FK_25bcdeedf65113cfb3985f16f06"`);
        await queryRunner.query(`DROP TABLE "git_repository"`);
        await queryRunner.query(`DROP TABLE "favorite_repository"`);
    }

}
