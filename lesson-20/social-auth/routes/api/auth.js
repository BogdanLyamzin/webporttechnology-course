import express from "express";

import * as ctrl from "../../controllers/auth/index.js";

import {passport} from "../../middlewares/index.js";

import {ctrlWrapper} from './../../helpers/index.js';

const router = express.Router();

router.get("/google", passport.authenticate("google", {scope: ["email", "profile"]}));

router.get("/google/callback", passport.authenticate("google", {session: false}), ctrlWrapper(ctrl.googleAuth));

router.get("/facebook", passport.authenticate("facebook", {scope: ["email", "public_profile"]}));

router.get("/facebook/callback", passport.authenticate("facebook", {session: false}), ctrlWrapper(ctrl.facebookAuth));

export default router;