import Apartment from "../models/apartment.js";
import Category from "../models/category.js";
import City from "../models/city.js";
import advertiser from "../models/advertiser.js";
//הוספה 
export const AddApartment = async (req, res) => {
    const { 
        NameApartment,
        Description,
        CodeCategory,
        CodeCity,
        Adress,
        NumBed,
        Additives,
        Price,
        CodeAdvertisement 
    } = req.body;

    try {
        // יצירת דירה חדשה
        const newApartment = new Apartment({
            NameApartment,
            Description,
            CodeCategory,
            CodeCity,
            Adress,
            NumBed,
            Additives,
            Price,
            CodeAdvertisement
        });

        const savedApartment = await newApartment.save();

        // עדכון קטגוריה
        await Category.findByIdAndUpdate(
            CodeCategory, 
            { $push: { Apartments: savedApartment._id } }, 
            // { new: true } // מחזיר את האובייקט המעודכן (אופציונלי)
        );

        // עדכון עיר
        await City.findByIdAndUpdate(
            CodeCity, 
            { $push: { Apartments: savedApartment._id } },
            // { new: true }
        );

        // עדכון משווק
        await advertiser.findByIdAndUpdate(
            CodeAdvertisement, 
            { $push: { ArrApartments: savedApartment._id } },
            // { new: true }
        );

        res.status(201).json(savedApartment);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};
//מחיקה
// export const deleteApartment = async (req, res) => {
//     // const { apartmentId } = req.params;
//     console.log(req.params)
//     try {
//         // שליפת הדירה למחיקת המידע הקשור אליה
//         const apartment = await Apartment.findById(req.params);
//         console.log(apartment)
//         if (!apartment) {
//             return res.status(404).json({ error: 'Apartment not found!' });
//         }
//         const savedApartment = await apartment.save();
//         // מחיקת מזהה הדירה מהרשימה בקטגוריה
//         await Category.findByIdAndUpdate(
//             apartment.CodeCategory,
//             { $pull: { Apartments: savedApartment._id  } }
//         );

//         // מחיקת מזהה הדירה מהרשימה בעיר
//         await City.findByIdAndUpdate(
//             apartment.CodeCity,
//             { $pull: { Apartments:  savedApartment._id } }
//         );

//         // מחיקת מזהה הדירה מהרשימה במשווק
//         await advertiser.findByIdAndUpdate(
//             apartment.CodeAdvertisement,
//             { $pull: { ArrApartments:  savedApartment._id } }
//         );

//         // מחיקת הדירה ממאגר הדירות
//         await Apartment.findByIdAndDelete(apartment );

//         res.status(200).json({ message: 'Apartment deleted successfully!' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: err.message });
//     }
// };
export const deleteApartment = async (req, res) => {
    const { id } = req.params; // קבלת מזהה הדירה מהפרמטרים בנתיב
console.log( req.params)
    try {
        // שליפת הדירה למחיקת המידע הקשור אליה
        const MYapartment = await Apartment.findById(id);
        console.log(MYapartment)
        if (!MYapartment) {
            return res.status(404).json({ error: 'Apartment not found!' });
        }

        // מחיקת מזהה הדירה מהרשימה בקטגוריה
        await Category.findByIdAndUpdate(
            MYapartment.CodeCategory,
            { $pull: { Apartments: MYapartment._id } } // שימוש במזהה של הדירה
        );

        // מחיקת מזהה הדירה מהרשימה בעיר
        await City.findByIdAndUpdate(
            MYapartment.CodeCity,
            { $pull: { Apartments: MYapartment._id } }
        );

        // מחיקת מזהה הדירה מהרשימה במשווק
        await advertiser.findByIdAndUpdate(
            MYapartment.CodeAdvertisement,
            { $pull: { ArrApartments: MYapartment._id } }
        );

        // מחיקת הדירה ממאגר הדירות
        await Apartment.findByIdAndDelete(id);

        res.status(200).json({ message: 'Apartment deleted successfully!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
};

// export const remove = (req, res) => {
//     const { id } = req.params
//     Apartment.findByIdAndDelete(id)
//         .then(Apartment => {
//             res.status(200).send({ message: `delete Apartment ${Apartment._id} succeed!` })
//         })
//         .catch(err => {
//             res.status(500).send({ error: err.message })
//         })
// }
//עדכון
export const update = (req, res) => {
    const { id } = req.params
    Apartment.findByIdAndUpdate(id, req.body, { new: true })
        .then(Apartment => {
            res.status(200).send({ message: `update Apartment ${Apartment._id} succeed!` })
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })
} 
//	שליפת כל הדירות
export const getAll = (req, res) => {
    Apartment.find()
        .then(Apartment => {
            res.status(200).send(Apartment)
        })
        .catch(error => {
            res.status(500).send({ error: error.message })
        })
}
//	שליפת דירה לפי קוד
export const getById = (req, res) => {
    Apartment.findById(req.params.id)
        .then(Apartment => {
            if (!Apartment) {
                return res.status(404).send({ error: `Apartment not found!` })
            }
            res.status(200).send({ Apartment })
        })
        .catch(err => {
            res.status(500).send({ error: err.message })
        })
}
// שליפת דירות לפי קוד קטגוריה
export const getByCodeCategory = async (req, res) => {
    try {
        // שליפת הקטגוריה לפי _id
        const category = await Category.findById(req.params._id);

        // אם הקטגוריה לא נמצאה
        if (!category) {
            return res.status(404).send({ error: `Category not found for ID ${req.params._id}` });
        }

        // בדיקת הדירות בקטגוריה
        const apartments = category.Apartments; // Assuming there's an Apartments field in the category schema

        if (!apartments || apartments.length === 0) {
            return res.status(404).send({ error: `No apartments found in category ${req.params._id}` });
        }

        res.status(200).send({ apartments });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};


//	שליפת דירות לפי קוד עיר
export const getByCodeCity = async (req, res) => {
    try {
        // שליפת הקטגוריה לפי _id
        const city = await City.findById(req.params._id);

        // אם הקטגוריה לא נמצאה
        if (!city) {
            return res.status(404).send({ error: `City not found for ID ${req.params._id}` });
        }

        // בדיקת הדירות בקטגוריה
        const apartments = city.Apartments; // Assuming there's an Apartments field in the category schema

        if (!apartments || apartments.length === 0) {
            return res.status(404).send({ error: `No apartments found in city ${req.params._id}` });
        }

        res.status(200).send({ apartments });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
};

//	-קטנה וגדולה ,שליפת דירות לפי כמות מיטות 
export const getWherenumbed1 = (req, res) => {
    const {num} = req.params;
    Apartment.find({
        NumBed: num 
    })
        .then(apartments => {
            if (apartments.length === 0) {
                return res.status(404).send({ error: "No apartments found in the specified range" });
            }
            res.status(200).send({ apartments });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
};

//	קטנה-  שליפת דירות לפי כמות מיטות 
export const getWherenumbed2 = (req, res) => {
    Apartment.find()
        .where({
            $or: [
                { amount: { $lte: 10 } },
                { amount: { $gt: 5 } }
            ]
        })
        .then(Apartment => {
            res.status(200).send({ Apartment })
        })
        .catch(error => {
            res.status(500).send({ error: error.message })
        })
}
//	שליפת דירות לפי מחיר 
export const getWherepricelow = (req, res) => {
    const {price}=req.params
       Apartment.find()
        .where({
            $and: [
                { Price: { $lte: price} },
                { Price: { $gt: 0 } }
            ]
        })
        .then(Apartment => {
            res.status(200).send({ Apartment })
        })
        .catch(error => {
            res.status(500).send({ error: error.message })
        })
}
//	שליפת דירות לפי מחיר 
// export const getWherepriceheigth = (req, res) => {
//     const {price}=req.params
//     const parsedPrice = parseFloat(price); // המרת הפרמטר למספר
//     Apartment.find({
//         Price: { $gt: parsedPrice } // חיפוש לפי מחיר גדול מהערך שנשלח
//     })
        
//         .then(Apartment => {
//             res.status(200).send({ Apartment })
//         })
//         .catch(error => {
//             res.status(500).send({ error: error.message })
//         })
// }
export const getWherepriceheigth = (req, res) => {
    const { price } = req.params;

    // המרת הפרמטר למספר ובדיקה שהוא חוקי
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice)) {
        return res.status(400).send({ error: "Invalid price parameter. Please provide a valid number." });
    }

    Apartment.find({
        Price: { $gt: parsedPrice } // חיפוש לפי מחיר גדול מהערך שנשלח
    })
        .then(apartments => {
            if (apartments.length === 0) {
                return res.status(404).send({ error: `No apartments found with Price greater than ${price}` });
            }
            res.status(200).send({ apartments });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
};