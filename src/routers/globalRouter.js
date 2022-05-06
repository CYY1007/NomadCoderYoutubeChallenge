import express from "express";
import {homePage,trendingPage,newPage} from "../controllers/globalControllers";
import {joinUser,loginUser} from "../controllers/userControllers";

const globalRouter = express.Router();

globalRouter.get('/',homePage);
globalRouter.get('/trending',trendingPage);
globalRouter.get('/new',newPage);
globalRouter.get('/join',joinUser);
globalRouter.get('/login',loginUser);

export default globalRouter;
