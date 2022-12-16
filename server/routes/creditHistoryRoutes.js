import express from "express";
import { _getByCustIdIn } from "../controllers/creditHistoryController.js";

const router = express.Router();

/*
* Credit History Routes
*/
router.get('/:custIdList', _getByCustIdIn);

export default router;