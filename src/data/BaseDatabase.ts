import knex from 'knex';
import Knex from 'knex'; 

export abstract class BaseDatabase {

    private static connection: Knex | null = null
    
    protected getConnection (){
        if (!BaseDatabase.connection){
            BaseDatabase.connection = knex({
                client: 'mysql',
                connection: {
                    host: process.env.DB_HOST,
                    port: Number(process.env.DB_PORT) | 3306,
                    user: process.env.DB_USERNAME,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME
                }
            });
        }

        return BaseDatabase.connection;
    }

    protected async destroyConnection() {
        if(BaseDatabase.connection){
            BaseDatabase.connection = null;
        }
    }
}