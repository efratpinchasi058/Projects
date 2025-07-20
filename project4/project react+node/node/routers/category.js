import express from 'express'

import {
    getAll,
    AddCategory
} from '../controllers/category.js'
import {checkAuth} from '../middlewares.js'
const router = express.Router()

router.get('', getAll)
router.post('',checkAuth, AddCategory)

export default router