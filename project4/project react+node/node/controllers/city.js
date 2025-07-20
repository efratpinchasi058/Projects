
import city from '../models/city.js';
// שליפת כל הערים
export const getAll = (req, res) => {
    city.find()
        .then(data => {
            res.status(200).send({ city: data })
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })
}
// הוספה
export const AddCity = (req, res) => {

    const {CityName,Apartments} = req.body
    const newCity = new city({   
        CityName,
        Apartments
    })
    newCity.save()
        .then(city => {
            res.status(200).send({ message: `create city ${city._id} succeed!` })
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })
}
