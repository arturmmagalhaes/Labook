import express from 'express';
import { UserController } from '../controller/UserController';

export const userRouter = express.Router();
const user = new UserController();

userRouter.post("/signup", user.signUp);
userRouter.post("/signin", user.signIn);