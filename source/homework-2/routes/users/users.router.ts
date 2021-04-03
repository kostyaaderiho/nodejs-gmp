import express from 'express';

import {
    post,
    getById,
    get,
    update,
    remove,
} from '../../controllers/users.controller';
import { BodySchema as BodyValidationSchema } from './validation/schemas';
import { validator } from './validation/validator';

const router = express.Router();

router.post('/', validator.body(BodyValidationSchema), post);
router.get('/:id', getById);
router.get('/', get);
router.put('/:id', update);
router.delete('/:id', remove);

export { router };
