import { Router } from 'express';

import {
    post,
    getById,
    get,
    update,
    remove
} from '../controllers/user.controller';
import { validator, UserBodySchema } from './validation';
import { logRequest, loginCheck } from '../middlewares';
import { promisifyRequest, timing } from '../decorators';
import { userUrl } from '../constants';

const router = Router({ mergeParams: true });
const logger = logRequest(userUrl);

router.post(
    '/',
    logger,
    loginCheck,
    validator.body(UserBodySchema),
    timing(promisifyRequest(post))
);
router.get('/:id', logger, loginCheck, timing(promisifyRequest(getById)));
router.get('/', logger, loginCheck, timing(promisifyRequest(get)));
router.put(
    '/:id',
    logger,
    loginCheck,
    validator.body(UserBodySchema),
    timing(promisifyRequest(update))
);
router.delete('/:id', logger, loginCheck, timing(promisifyRequest(remove)));

export { router as userRouter };
