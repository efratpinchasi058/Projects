import express from "express";

import { AddApartment,deleteApartment,update,getAll,getById,getByCodeCategory,getByCodeCity,
    getWherenumbed1,getWherepriceheigth,getWherepricelow
 } from "../controllers/apartmente.js";
 import {checkAuth} from '../middlewares.js'
const router = express.Router()

router.get('', getAll)

router.post('',checkAuth,AddApartment)

router.delete('/:id',deleteApartment)

router.patch('/:id', checkAuth,update)

router.get('/:id', getById)

router.get('/category/:_id', getByCodeCategory);

router.get('/code/:_id', getByCodeCity)

router.get('/bed/:num', getWherenumbed1)

router.get('/price1/:price', getWherepricelow)   
 
router.get('/price2/:price', getWherepriceheigth)


export default router