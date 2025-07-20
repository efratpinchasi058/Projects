import express from "express";

import { create, getAll, LogIn } from "../controllers/advertiser.js";

const router = express.Router()

router.get('', getAll)
router.post('/register', create)
router.post('/login', LogIn)

export default router