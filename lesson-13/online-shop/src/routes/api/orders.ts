import express, {Router} from "express";

import * as ctrl from "../../controllers/orders";
import { ctrlWrapper } from "../../helpers";
import { validateBody, authenticate } from "../../middlewares";
import { addSchema } from "../../models/order";

const router: Router = express.Router();

router.get("/", authenticate, ctrlWrapper(ctrl.getAll));

router.post("/", authenticate, validateBody(addSchema), ctrlWrapper(ctrl.add));

export default router;