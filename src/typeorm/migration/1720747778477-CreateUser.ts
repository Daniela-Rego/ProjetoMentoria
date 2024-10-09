import { MigrationInterface, QueryRunner,Table } from "typeorm";

export class CreateUser1720747778472 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name:"users",
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
                    name:"cpf",
                    type: "varchar",
                    isNullable:false   
                },
                {
                    name:"birth_date",
                    type: "date",
                    isNullable:false   
                },
                {
                    name:"email",
                    type: "varchar",
                    isNullable:false     
                },
                
                {
                    name:"type",
                    type: "varchar",
                    isNullable:false  
                },
                {
                    name:"password",
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
        await queryRunner.dropTable("users")
    }

}
