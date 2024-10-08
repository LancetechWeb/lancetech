import express from 'express';
import AuthController from '../controllers/auth.controllers';
import { currentUser, Filler, requireAuth} from '../middlewares'

const router = express.Router();

router.post('/sign-up', AuthController.signUp);
router.post('/sign-in', AuthController.signIn);
router.post('/sign-out', AuthController.signOut);
router.post('/check-auth', requireAuth, AuthController.checkAuth);

export { router as authRouter };
