import express from 'express';
const router = express.Router();
import { requireAuth, validateRequest } from '../../middleware';
import { body, query } from 'express-validator';
import { userActionController } from '../../controllers/v1';

// note: [userAction] will be deprecated in /v2 in favor of [action]
router.post(
	'/',
	requireAuth,
	body('action'),
	validateRequest,
	userActionController.addUserAction
);

router.get(
	'/',
	requireAuth,
	query('action'),
	validateRequest,
	userActionController.getUserAction
);

export default router;
