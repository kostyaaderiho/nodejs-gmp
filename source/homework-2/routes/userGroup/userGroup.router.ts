import { Router } from 'express';

import { post, get } from '../../controllers/userGroup.controller';
import { logRequest } from '../../middlewares';
import { promisifyRequest, timing } from '../../decorators';
import { userGroupUrl } from '../../constants';

const router = Router();
const logger = logRequest(userGroupUrl);

router.post('/', logger, timing(promisifyRequest(post)));
router.get('/', logger, timing(promisifyRequest(get)));

export { router };
