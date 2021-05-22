import { Router } from 'express';

import {
    get,
    getById,
    post,
    put,
    remove,
} from '../controllers/group.controller';
import { logRequest, loginCheck } from '../middlewares';
import { promisifyRequest, timing } from '../decorators';
import { groupUrl } from '../constants';

const router = Router();
const logger = logRequest(groupUrl);

router.get('/', logger, loginCheck, timing(promisifyRequest(get)));
router.get('/:id', logger, loginCheck, timing(promisifyRequest(getById)));
router.post('/', logger, loginCheck, timing(promisifyRequest(post)));
router.put('/:id', logger, loginCheck, timing(promisifyRequest(put)));
router.delete('/:id', logger, loginCheck, timing(promisifyRequest(remove)));

export { router as groupRouter };
