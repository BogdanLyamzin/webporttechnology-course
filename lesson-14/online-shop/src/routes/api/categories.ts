import express, {Router} from "express";

import * as ctrl from "../../controllers/categories";
import { ctrlWrapper } from "../../helpers";
import {validateBody} from '../../middlewares';
import {addSchema} from "../../models/category";

const router: Router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.post("/", validateBody(addSchema), ctrlWrapper(ctrl.add));

export default router;