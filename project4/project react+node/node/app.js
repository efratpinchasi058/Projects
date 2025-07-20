import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'


import cityRouter from './routers/city.js'
import categoryRouter from './routers/category.js'
import advertiserRoter from './routers/advertiser.js'
import apartmentRouter from './routers/apartment.js'
// import { checkAuth } from './api/middlewares.js'
const app = express()
const port = 3003

app.use(bodyParser.json())
// cors הרשאת גישה - פתרון בעיית ה 
app.use(cors())

// uri - מחרוזת חיבור למסד נתונים
// mongodb://localhost:27017
mongoose.connect(`mongodb://localhost:27017/project_DB`)
    .then(() => {
        console.log('connect to mongoDB! 👍😊');
    })
    .catch(err => {
        console.log({ error: err.message });
    })

app.use('/city', cityRouter)
app.use('/category', categoryRouter)
app.use('/advertise', advertiserRoter)
app.use('/apartment',apartmentRouter)
app.listen(port, () => {
    console.log(`my application is listening on http://localhost:${port}`);
})