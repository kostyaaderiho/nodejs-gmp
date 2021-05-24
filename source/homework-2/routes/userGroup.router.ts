import { Router } from 'express';

import { post, get } from '../controllers/userGroup.controller';
import { logRequest, loginCheck } from '../middlewares';
import { promisifyRequest, timing } from '../decorators';
import { userGroupUrl } from '../constants';

const router = Router();
const logger = logRequest(userGroupUrl);

router.post('/', logger, loginCheck, timing(promisifyRequest(post)));
router.get('/', logger, loginCheck, timing(promisifyRequest(get)));

export { router as userGroupRouter };
