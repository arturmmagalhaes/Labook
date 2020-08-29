import { BaseDatabase } from "./BaseDatabase";
import { FollowDTO } from "../model/input/FollowDTO";

export class FollowDatabase extends BaseDatabase {
    
    private static TABLE_NAME = "Followers";

    public async getFollow (data: FollowDTO) {
        try{
            const verify = await super.getConnection().raw(`
                SELECT * FROM ${FollowDatabase.TABLE_NAME} 
                WHERE idUser = "${data.idUser}" and idFollower = "${data.idFollower}"
            `);
            return verify;
        } catch (error) {
            throw new Error (error.message);
        }
    }

    public async followUser (data: FollowDTO): Promise<void> {
        try {
            await super.getConnection().raw(`
                INSERT INTO ${FollowDatabase.TABLE_NAME}
                VALUES ("${data.idUser}", "${data.idFollower}")
            `);
        } catch (error) {
            throw new Error (error.message);
        } finally {
            super.destroyConnection();
        }
    }

    public async unFollowUser (data: FollowDTO): Promise<void> {
        try {
            await super.getConnection().raw(`
                DELETE FROM ${FollowDatabase.TABLE_NAME}
                WHERE idUser = "${data.idUser}" AND idFollower = "${data.idFollower}"
            `);
        } catch (error) {
            throw new Error (error.message);
        } finally {
            super.destroyConnection();
        }
    }
}