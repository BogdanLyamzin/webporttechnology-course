import express, {Router} from "express";

import * as ctrl from "../../controllers/products";
import { ctrlWrapper } from "../../helpers";

const router: Router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll))

export default router;