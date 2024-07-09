import { Router } from 'express';
import { registerUser, loginUser, updateUser } from '../controllers/userController';

const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/update', updateUser);

export default router;
