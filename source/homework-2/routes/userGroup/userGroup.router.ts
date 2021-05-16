import { Router } from 'express';

import { post, get } from '../../controllers/userGroup.controller';
import { logRequest } from '../../middlewares';
import { userGroupUrl } from '../../constants/api.constant';

const router = Router();
const logger = logRequest(userGroupUrl);

router.post('/', logger, post);
router.get('/', logger, get);

export { router };
