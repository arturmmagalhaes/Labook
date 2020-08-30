import { BaseDatabase } from "./BaseDatabase";
import { PostDTO } from "../model/input/PostDTO";
import { GetFeedDTO } from "../model/output/GetFeedDTO";

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

    public async getFeed(id: String): Promise<GetFeedDTO> {
        try {
            const result = await super.getConnection().raw(`
                SELECT ${PostDatabase.TABLE_NAME}.id, text, create_at, id_user, type, name FROM ${PostDatabase.TABLE_NAME}
                JOIN Users ON Users.id = ${PostDatabase.TABLE_NAME}.id_user
                JOIN Followers ON Followers.idUser = Users.id
                WHERE Followers.idFollower = "${id}"
                ORDER BY ${PostDatabase.TABLE_NAME}.create_at DESC;
            `);

            return result[0].map((item: any) => {
                return {
                    id: item.id,
                    text: item.text,
                    create_at: item.create_at, 
                    id_user: item.id_user,
                    type: item.type,
                    name: item.name
                }
            });
        } catch (error) {
            throw new Error (error.message);
        } finally {
            super.destroyConnection();
        }
    }

}