import { Request, Response } from 'express';
import { Authenticator } from '../services/Authenticator';
import { PostBusiness } from '../business/PostBusiness';
import { IdGenerator } from '../services/idGenerator';
import moment from 'moment';

export class PostController {

    public async createPost(req: Request, res: Response){
        try {
            const post = new PostBusiness();
            const token = new Authenticator().getData(req.headers.authorization as string);
            const idGenerator = new IdGenerator().generateId();
            const data = {
                id: idGenerator,
                text: req.body.text,
                create_at: moment(),
                id_user: token.id,
                type: req.body.type,
                photo: req.body.photo
            }

            await post.createPost(data);
            
            res.status(200).send({
                message: "Post Created Successfully"
            });
        } catch (error) {
            res.status(400).send({
                message: error.message
            });
        }
    }
}