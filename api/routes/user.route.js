import express from 'express'
import {test, check , check2} from '../controllers/user.controller.js'

const router = express.Router()

router.get('/test',test)
router.get('/test/check', check)
router.get('/check', check)
router.get('/check2', check2)



export default router