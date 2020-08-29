import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';
import { IdGenerator } from '../services/idGenerator';
import { HashManager } from '../services/HashManager';
import { SignInDTO } from '../model/input/SigninDTO';

export class UserController {

    public async signUp (req: Request, res: Response) {
        try {
            const idGenerator = new IdGenerator();
            const hashManager = new HashManager();
            const user = new UserBusiness();
            const password = await hashManager.hash(req.body.password);

            const data = {
                id: idGenerator.generateId(),
                name: req.body.name,
                email: req.body.email,
                password: password,
                role: req.body.role
            }
            
            await user.signUp(data);

            res.status(200).send({
                message: "Create User"
            });
        } catch (error) {
            res.status(400).send({
                message: error.message
            });
        }
    }

    public async signIn (req: Request, res: Response) {
        try {
            const user = new UserBusiness();
            const data: SignInDTO = {
                email: req.body.email as string, 
                password: req.body.password as string
            }
            const token = await user.signIn(data);
            res.status(200).send({
                token
            })
        } catch (error) {
            res.status(400).send({
                message: error.message
            })
        }
    }
}