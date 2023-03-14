import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const router = Router();

router.get('/', userController.getAll);

router.get('/:id', userController.getById);

router.post('/', userController.addNewUser);

export default router;