import { BaseDatabase } from "./BaseDatabase";

export class FollowDatabase extends BaseDatabase {
    
    private static TABLE_NAME = "Followers";

    public async getFollow (idUser: string, idFollower: string) {
        try{
            const verify = await super.getConnection().raw(`
                SELECT * FROM ${FollowDatabase.TABLE_NAME} 
                WHERE idUser = "${idUser}" and idFollower = "${idFollower}"
            `);
            return verify;
        } catch (error) {
            throw new Error (error.message);
        }
    }

    public async followUser (idUser: string, idFollower: string): Promise<void> {
        try {
            await super.getConnection().raw(`
                INSERT INTO ${FollowDatabase.TABLE_NAME}
                VALUES ("${idUser}", "${idFollower}")
            `);
        } catch (error) {
            throw new Error (error.message);
        } finally {
            super.destroyConnection();
        }
    }
}