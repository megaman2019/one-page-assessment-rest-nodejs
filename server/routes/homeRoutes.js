import express from 'express';
import { _getUserByUserName } from '../controllers/homeController.js';

const router = express.Router();    

/*
*  Home Routes
*/
router.get('/user/:username', _getUserByUserName)

export default router;