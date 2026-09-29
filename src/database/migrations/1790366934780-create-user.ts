import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1790366934780 implements MigrationInterface {
    name = 'CreateUser1790366934780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(150) NOT NULL, \`lastName\` varchar(150) NOT NULL, \`email\` varchar(255) NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, \`password_hash\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
