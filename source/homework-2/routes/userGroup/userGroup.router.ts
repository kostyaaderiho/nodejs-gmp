import { Router } from 'express';
import { post, get } from '../../controllers/userGroup.controller';

const router = Router();

router.post('/', post);
router.get('/', get);

export { router };
