import { FollowDatabase } from "../data/FollowDatabase";
import { FollowDTO } from "../model/input/FollowDTO";

export class FollowBusiness {

    private follow = new FollowDatabase();

    public async followUser (data: FollowDTO): Promise<void> {
        try {
            const verify = await this.follow.getFollow(data);
            
            if(verify[0].length !== 0){
                throw new Error ("User Already Follows");
            }

            await this.follow.followUser(data);

        } catch (error) {
            throw new Error (error.message);
        }
    }

    public async unFollowUser (data: FollowDTO): Promise<void> {
        try {
            const verify = await this.follow.getFollow(data);
            
            if (verify[0].length === 0) {
                throw new Error ("User Already Follows");
            }

            await this.follow.unFollowUser(data);

        } catch (error) {
            throw new Error (error.message);
        }
    }
}