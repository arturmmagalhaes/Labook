import express from 'express';
import { PostController } from '../controller/PostController';

export const PostRouter = express.Router();
const post = new PostController();

PostRouter.post("/", post.createPost);
PostRouter.get("/feed", post.getFeed);