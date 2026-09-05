import express from 'express'
import {test, check} from '../controllers/user.controller.js'

const router = express.Router()

router.get('/test',test)
router.get('/test/check', check)



export default router