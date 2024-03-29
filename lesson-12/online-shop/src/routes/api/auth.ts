import express, {Router} from "express";

import * as ctrl from "../../controllers/auth";
import {ctrlWrapper} from './../../helpers';
import {validateBody} from "../../middlewares";
import { registerSchema, loginSchema } from "../../models/user";

const router: Router = express.Router();

// signup
router.post("/register", validateBody(registerSchema), ctrlWrapper(ctrl.register));

// signin
router.post("/login", validateBody(loginSchema), ctrlWrapper(ctrl.login));

export default router;