import { MigrationInterface, QueryRunner,Table } from "typeorm";

export class CreateUser1720747778472 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name:"user_orm",
            columns:[
                {
                   name:"id",
                   type: "uuid",
                    isPrimary:true, 
                    isNullable:false   
                },
                {
                    name:"name",
                    type: "varchar",
                    isNullable:false   
                 },
                 {
                    name:"age",
                    type: "int",
                    isNullable:false   
                 },
                {
                    name:"created_at",
                    type: "timestamp",
                    default:"now()"   
                 }
        ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user_orm")
    }

}
