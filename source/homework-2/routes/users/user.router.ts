import { Router } from 'express';

import {
    post,
    getById,
    get,
    update,
    remove,
} from '../../controllers/user.controller';
import { BodySchema as BodyValidationSchema } from './validation/schemas';
import { validator } from './validation/validator';
import { logRequest } from '../../middlewares';
import { asyncRequest, timing } from '../../decorators';
import { userUrl } from '../../constants/api.constant';

const router = Router({ mergeParams: true });
const logger = logRequest(userUrl);

router.post(
    '/',
    logger,
    validator.body(BodyValidationSchema),
    timing(asyncRequest(post))
);
router.get('/:id', logger, asyncRequest(getById));
router.get('/', logger, timing(asyncRequest(get)));
router.put(
    '/:id',
    logger,
    validator.body(BodyValidationSchema),
    timing(asyncRequest(update))
);
router.delete('/:id', logger, timing(asyncRequest(remove)));

export { router };
