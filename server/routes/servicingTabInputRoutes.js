import express from 'express';
import { _getOneByAppId, _createOrUpdate, _remove } from '../controllers/servicingController.js';

const router = express.Router();

/*
*  Routes
*/
router.get('/:appId', _getOneByAppId);
router.post('/', _createOrUpdate);
router.delete('/:appId', _remove);

export default router;
