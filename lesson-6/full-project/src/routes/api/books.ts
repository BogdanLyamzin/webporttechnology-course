import express from "express";

import * as ctrl from "../../controllers/books";

import {ctrlWrapper} from "../../helpers";

import {isValidId} from "../../middlewares";

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", isValidId, ctrlWrapper(ctrl.getById));

router.post("/", ctrlWrapper(ctrl.add));

router.put("/:id", isValidId, ctrlWrapper(ctrl.updateById));

router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeById));

export default router;