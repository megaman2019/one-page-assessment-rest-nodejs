import express from "express";
import { _getByAppId } from "../controllers/applicationController.js";

const router = express.Router();

/*
* application Routes
*/
router.get('/:id', _getByAppId);

export default router;