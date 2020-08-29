import express from 'express';
import { FollowController } from '../controller/FollowController';

export const FollowRouter = express.Router();
const follow = new FollowController();

FollowRouter.post("/", follow.followUser);