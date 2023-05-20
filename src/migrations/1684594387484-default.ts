import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684594387484 implements MigrationInterface {
    name = 'Default1684594387484'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "gits" ("id" SERIAL NOT NULL, "language" text NOT NULL, "description" json, CONSTRAINT "PK_5e65ba6abc0fbcc439d4bd5a142" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "favorites" ("id" SERIAL NOT NULL, "ip" text NOT NULL, "date" date NOT NULL, CONSTRAINT "PK_890818d27523748dd36a4d1bdc8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "git_favorites" ("git_id" integer NOT NULL, "favorites_id" integer NOT NULL, CONSTRAINT "PK_ba75427cd8ffa6ea300de16076a" PRIMARY KEY ("git_id", "favorites_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_fd619439c5fe0f16ddf8610d77" ON "git_favorites" ("git_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_aa4d6477d4c90197a1982cde51" ON "git_favorites" ("favorites_id") `);
        await queryRunner.query(`ALTER TABLE "git_favorites" ADD CONSTRAINT "FK_fd619439c5fe0f16ddf8610d772" FOREIGN KEY ("git_id") REFERENCES "favorites"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "git_favorites" ADD CONSTRAINT "FK_aa4d6477d4c90197a1982cde51f" FOREIGN KEY ("favorites_id") REFERENCES "gits"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "git_favorites" DROP CONSTRAINT "FK_aa4d6477d4c90197a1982cde51f"`);
        await queryRunner.query(`ALTER TABLE "git_favorites" DROP CONSTRAINT "FK_fd619439c5fe0f16ddf8610d772"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_aa4d6477d4c90197a1982cde51"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_fd619439c5fe0f16ddf8610d77"`);
        await queryRunner.query(`DROP TABLE "git_favorites"`);
        await queryRunner.query(`DROP TABLE "favorites"`);
        await queryRunner.query(`DROP TABLE "gits"`);
    }

}
