import express from 'express'

import {
    getAll,
    AddCity
} from '../controllers/city.js'
import {checkAuth} from '../middlewares.js'

const router = express.Router()
router.get('',getAll)
router.post('',checkAuth,AddCity)

export default router