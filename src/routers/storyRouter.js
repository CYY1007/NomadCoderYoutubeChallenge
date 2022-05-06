import express from "express";
import {storiesPage,storiesEdit,storiesDelete} from "../controllers/stroyControllers";

const storyRouter = express.Router();

storyRouter.get('/:id(\\d+)',storiesPage);
storyRouter.get('/:id(\\d+)/edit',storiesEdit);
storyRouter.get('/:id(\\d+)/delete',storiesDelete);

export default storyRouter;