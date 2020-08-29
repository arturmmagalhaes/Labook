import { BaseDatabase } from "./BaseDatabase";
import { SIGNUPDTO } from "../model/input/SignupDTO";
import { SignInDTO } from "../model/output/SigninDTO";

export class UserDatabase extends BaseDatabase {

    private static TABLE_NAME = "Users";

    public async signUp (data: SIGNUPDTO): Promise<void> {
        try {
          await super.getConnection().raw(`
            INSERT INTO ${UserDatabase.TABLE_NAME} 
            VALUES ("${data.id}","${data.name}","${data.password}","${data.email}","${data.role}")
            `);
        } catch (error) {
            throw new Error (error.message);
        } finally {
            await super.destroyConnection();
        }
    }

    public async signIn (email: string): Promise<SignInDTO> {
        try {
            const result = await super.getConnection().raw(`
                SELECT * FROM ${UserDatabase.TABLE_NAME} 
                WHERE email = "${email}"
            `);
            return {
                id: result[0][0].id,
                email: result[0][0].email,
                password: result[0][0].password,
                role: result[0][0].role
            };
        } catch (error) {
            throw new Error (error.message);
        } finally {
            super.destroyConnection();
        }
    }
}