import { Router } from 'express'
import { signUpUser,logInUser,refreshUserToken,validateUser } from '../controller/user.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = Router()

router.post('/sign-up', signUpUser)
router.post('/log-in', logInUser)
router.post('/refresh',refreshUserToken)
router.get('/validate-me',authMiddleware, validateUser)


export default router;