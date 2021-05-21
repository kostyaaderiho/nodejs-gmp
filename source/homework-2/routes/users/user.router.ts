import { Router } from 'express';

import {
    post,
    getById,
    get,
    update,
    remove
} from '../../controllers/user.controller';
import { BodySchema as BodyValidationSchema } from './validation/schemas';
import { validator } from './validation/validator';
import { logRequest } from '../../middlewares';
import { promisifyRequest, timing } from '../../decorators';
import { userUrl } from '../../constants';

const router = Router({ mergeParams: true });
const logger = logRequest(userUrl);

router.post(
    '/',
    logger,
    validator.body(BodyValidationSchema),
    timing(promisifyRequest(post))
);
router.get('/:id', logger, timing(promisifyRequest(getById)));
router.get('/', logger, timing(promisifyRequest(get)));
router.put(
    '/:id',
    logger,
    validator.body(BodyValidationSchema),
    timing(promisifyRequest(update))
);
router.delete('/:id', logger, timing(promisifyRequest(remove)));

export { router };
