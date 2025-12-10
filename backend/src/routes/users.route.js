import { Router } from 'express'
import { signUpUser,logInUser,refreshUserToken } from '../controller/user.controller.js';

const router = Router()

router.post('/sign-up', signUpUser)
router.post('/log-in', logInUser)
router.post('/refresh',refreshUserToken)


export default router;