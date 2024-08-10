import { MigrationInterface, QueryRunner,Table } from "typeorm";

export class Posts1722092424238 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name:"posts",
            columns:[
                {
                   name:"id",
                   type: "uuid",
                   isPrimary:true, 
                   isNullable:false   
                },
                {
                    name:"title",
                    type: "varchar",
                    isNullable:false   
                },
                {
                    name:"description",
                    type: "varchar",
                    isNullable:false   
                },
                {
                    name:"status",
                    type: "varchar",
                    isNullable:false  
                },
                {
                    name:"id_user",
                    type: "uuid",
                    isNullable:false   
                },
                {
                    name:"id_feeling",
                    type: "uuid",
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
        await queryRunner.dropTable("posts")
    }

}

