import { Router } from 'express';
import { addUsersToGroup } from '../../controllers/userGroup.controller';

const router = Router();

router.post('/', addUsersToGroup);

export { router };
