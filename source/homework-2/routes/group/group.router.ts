import { Router } from 'express';

import {
    get,
    getById,
    post,
    put,
    remove,
} from '../../controllers/group.controller';
import { logRequest } from '../../middlewares';
import { asyncRequest } from '../../decorators';
import { groupUrl } from '../../constants/api.constant';

const router = Router();
const logger = logRequest(groupUrl);

router.get('/', logger, asyncRequest(get));
router.get('/:id', logger, asyncRequest(getById));
router.post('/', logger, asyncRequest(post));
router.put('/:id', logger, asyncRequest(put));
router.delete('/:id', logger, asyncRequest(remove));

export { router };
