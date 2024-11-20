import { MigrationInterface, QueryRunner,Table } from "typeorm";

export class Status1722092424239 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name:"feeling",
            columns:[
                {
                   name:"id",
                   type: "uuid",
                   isPrimary:true, 
                   isNullable:false   
                },
                {
                    name:"feeling",
                    type: "varchar",
                    isNullable:false   
                },
                {
                    name:"color",
                    type: "varchar",
                    isNullable:false   
                },
                {
                    name:"created_at",
                    type: "timestamp",
                    default:"now()"   
                },
        ]
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("status")
    }

}

