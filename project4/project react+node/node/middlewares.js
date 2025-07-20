import Category from './models/category.js'
import jwt, { decode } from 'jsonwebtoken'


export const checkEmail = (req, res, next) => {
    const { email } = req.body
    if (email && email.contains('@')) {
        return next()
    }
    res.status(400).send({ error: 'The mail is invalid!' })
}

export const categoryExists = (req, res, next) => {
    const { category } = req.body

    if (!category && req.method == 'PATCH') {
        return next()
    }

    Category.findById(category)
        .then(category => {
            if (!category) {
                return res.status(404).send({ error: `category not found!` })
            }
            next()
        })
        .catch(error => {
            return res.status(500).send({ error: error.message })
        })
}

// בדיקה שנשלח טוקן ושהוא תקין ותקף
export const checkAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        // Authorization - הרשאה
        return res.status(401).send('Authorization failed!')
    }
    console.log(authHeader)
    const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;
    
    if (!token) {
        return res.status(401).send('Authorization failed!')
    }
    jwt.verify(token,'HT2yg75FXgfvy', (error, decoded) => {
        if (error || !decoded) {
            return res.status(401).send('Authentication failed!');
        }
        next();
    });
}
