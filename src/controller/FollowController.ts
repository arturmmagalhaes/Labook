import { Request, Response } from 'express';
import { FollowBusiness } from '../business/FollowBusiness';
import { Authenticator } from '../services/Authenticator';

export class FollowController {

    public async followUser (req: Request, res: Response) {
        try {
            const follow = new FollowBusiness();
            const token = new Authenticator().getData(req.headers.authorization as string);
            
            await follow.followUser(req.body.idUser, token.id);

            res.status(200).send({
                message: "User Follow"
            })
        } catch (error) {
            res.status(400).send({
                message: error.message
            })
        }
    }
}