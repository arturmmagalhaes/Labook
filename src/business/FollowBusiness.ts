import { FollowDatabase } from "../data/FollowDatabase";

export class FollowBusiness {

    private follow = new FollowDatabase();

    public async followUser (idUser: string, idFollower: string) {
        try {
            const verify = await this.follow.getFollow(idUser, idFollower);
            
            if(verify[0].length !== 0){
                throw new Error ("User Already Follows");
            }

            await this.follow.followUser(idUser, idFollower);

        } catch (error) {
            throw new Error (error.message);
        }
    }
}