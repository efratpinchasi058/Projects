
import Category from '../models/category.js';
// שליפת כל הקטגוריות
export const getAll = (req, res) => {
    Category.find()
        .then(data => {
            res.status(200).send({ Category: data })
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })
}
// הוספה
export const AddCategory = (req, res) => {
    const {CategoryName,Apartments} = req.body
    const newCategory = new Category({   
        CategoryName,
        Apartments
    })
    newCategory.save()
        .then(category => {
            res.status(200).send({ message: `create category ${category._id} succeed!` })
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })
}
