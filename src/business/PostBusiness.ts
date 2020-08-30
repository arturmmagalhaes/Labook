import { PostDatabase } from "../data/PostDatabase";
import { PostDTO } from "../model/input/PostDTO";

export class PostBusiness {
    
    public async createPost(data: PostDTO) {
        try {
            if (!data) {
                throw new Error ("Invalid Entry");
            }
            const post = new PostDatabase();
            await post.createPost(data);
        } catch (error) {
            throw new Error (error.message);
        }
    }
}