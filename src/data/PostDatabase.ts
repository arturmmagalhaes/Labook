import { BaseDatabase } from "./BaseDatabase";
import { PostDTO } from "../model/input/PostDTO";

export class PostDatabase extends BaseDatabase {
    
    private static TABLE_NAME = "Post";

    public async createPost(data: PostDTO): Promise<void> {
        try {
            await super.getConnection().raw(`
                INSERT INTO ${PostDatabase.TABLE_NAME}
                VALUES ("${data.id}","${data.text}","${data.create_at.format("YYYY-MM-DD")}","${data.id_user}","${data.type}","${data.photo}")
            `);
        } catch (error) {
            throw new Error (error.message);
        } finally {
            await super.destroyConnection();
        }
    }
}