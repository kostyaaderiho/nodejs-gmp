import { Router } from 'express';
import {
    get,
    getById,
    post,
    put,
    remove,
} from '../../controllers/group.controller';

const router = Router();

router.get('/', get);
router.get('/:id', getById);
router.post('/', post);
router.put('/:id', put);
router.delete('/:id', remove);

export { router };
