import { Router } from 'express';

import { login } from '../controllers/login.controller';
import { LoginSchema, validator } from './validation';

const router = Router();

router.post('/', validator.body(LoginSchema), login);

export { router as loginRouter };
