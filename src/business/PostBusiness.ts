import { PostDatabase } from "../data/PostDatabase";
import { PostDTO } from "../model/input/PostDTO";
import { GetFeedDTO } from "../model/output/GetFeedDTO";

export class PostBusiness {

    private post = new PostDatabase();

    public async createPost(data: PostDTO): Promise<void> {
        try {
            if (!data) {
                throw new Error ("Invalid Entry");
            }
            
            await this.post.createPost(data);
        } catch (error) {
            throw new Error (error.message);
        }
    }

    public async getFeed(id: string): Promise<GetFeedDTO> {
        try {
            if (!id) {
                throw new Error ("Invalid Entry");
            }

            const result = await this.post.getFeed(id);

            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    
}