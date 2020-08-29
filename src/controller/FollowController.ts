import { Request, Response } from 'express';
import { FollowBusiness } from '../business/FollowBusiness';
import { Authenticator } from '../services/Authenticator';
import { FollowDatabase } from '../data/FollowDatabase';

export class FollowController {

    public async followUser (req: Request, res: Response) {
        try {
            const follow = new FollowBusiness();
            const token = new Authenticator().getData(req.headers.authorization as string);
            const data = {
                idUser: req.body.idUser, 
                idFollower: token.id
            }

            await follow.followUser(data);

            res.status(200).send({
                message: "User Follow"
            })
        } catch (error) {
            res.status(400).send({
                message: error.message
            })
        }
    }

    public async unFollowUser (req: Request, res: Response) {
        try {
            const follow = new FollowDatabase();
            const token = new Authenticator().getData(req.headers.authorization as string);
            const data = {
                idUser: req.body.idUser, 
                idFollower: token.id
            }
            
            await follow.unFollowUser(data);

            res.status(200).send({
                message: "Users Unfollow"
            })
        } catch (error) {
            res.status(400).send({
                message: error.message
            })
        }
    }
}