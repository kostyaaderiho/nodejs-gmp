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

const router = Router();

router.post('/', validator.body(BodyValidationSchema), post);
router.get('/:id', getById);
router.get('/', get);
router.put('/:id', validator.body(BodyValidationSchema), update);
router.delete('/:id', remove);

export { router };
