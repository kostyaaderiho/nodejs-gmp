import { Router } from 'express';

import {
    get,
    getById,
    post,
    put,
    remove
} from '../../controllers/group.controller';
import { logRequest } from '../../middlewares';
import { promisifyRequest, timing } from '../../decorators';
import { groupUrl } from '../../constants';

const router = Router();
const logger = logRequest(groupUrl);

router.get('/', logger, timing(promisifyRequest(get)));
router.get('/:id', logger, timing(promisifyRequest(getById)));
router.post('/', logger, timing(promisifyRequest(post)));
router.put('/:id', logger, timing(promisifyRequest(put)));
router.delete('/:id', logger, timing(promisifyRequest(remove)));

export { router };
