import express from "express";
import { _getByAppId } from "../controllers/exceptionController.js";

const router = express.Router();

/*
* Exception Routes
*/
router.get('/:appId', _getByAppId);

export default router;