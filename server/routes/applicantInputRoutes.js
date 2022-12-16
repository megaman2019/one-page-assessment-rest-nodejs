import express from 'express';
import { _getListByAppId, _createOrUpdate, _remove } from '../controllers/applicantInputController.js'

const router = express.Router();

/*
*  Routes
*/
router.get('/:appId', _getListByAppId);
router.post('/', _createOrUpdate);
router.delete('/:applicantId', _remove);

export default router;
