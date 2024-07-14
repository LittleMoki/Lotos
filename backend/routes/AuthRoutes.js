import { Router } from 'express'
import { RegisterUser } from '../controller/AuthController.js'
const router = Router()

router.post('/', RegisterUser)

export default router
