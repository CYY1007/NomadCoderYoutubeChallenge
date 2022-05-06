import express from "express";
import {userHome,userPage,userEdit} from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.get('/',userHome);
userRouter.get('/:id(\\d+)',userPage);
userRouter.get('/edit-profile',userEdit);

export default userRouter;