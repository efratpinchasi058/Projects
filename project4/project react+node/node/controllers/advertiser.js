import advertiser from "../models/advertiser.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';

export const getAll = (req, res) =>{ 

    advertiser.find()  
    .then(data => {
        res.status(200).send(data)
    })
    .catch(err => {
        res.status(500).send({ error: err.message })
    })

}

// export const LogIn = (req, res) =>{
//     const {email, password} = req.body

//     advertiser.find()  
//     .where({email:{$eq:email}})
//     .then(async advertiser=> {
//         if(advertiser.length == 0){
//             console.log('email not found! Please enter a valid email');
//             return res.status(404).send({ error: `email and password are not match!` })

//         }
//     let[Advertiser] = advertiser
//     if(Advertiser.password !== password ){ 
//         console.log('the password is invalid! Please enter a valid password');
//         return res.status(404).send({ error: `email and password are not match!` })
//     }

//     const token = await jwt.sign(
//         { email, advName: Advertiser.advName},
//         'HT2yg75FXgfvy',
//         {
//             expiresIn: '30s' 
//         }
//     )

//     res.status(200).send({Advertiser, token})
// })
//   .catch(error=>{
//     res.status(500).send({ error: error.message })  
//   })  

// }

// export const create = (req, res) => {   
//     const {email, password, phoneNumber, HomePhone,ArrApartments} = req.body

//     advertiser.find()
//     .where({ email: { $eq: email } })
//     .then(Advertiser => {   
//         if(Advertiser.length > 0)  {  
//             return res.status(400).send({ error: 'email exists!' })  
//     }
//     const newAdvertiser =   new advertiser({
//         email, 
//         password,
//         phoneNumber,
//         HomePhone,
//         ArrApartments   
//     })

//     newAdvertiser.save()
//     .then(async advertiser => {
//         const token = await jwt.sign(
//             {email, advName: advertiser.advName}, 'HT2yg75FXgfvy',
//             {expiresIn: '1hr'}
//         )
//         res.status(200).send({advertiser, token})
//     })
//     .catch(error=> {
//         res.status(500).send({error: error.message})
//     })


// })
// }

export const LogIn = (req, res) => {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
        return res.status(400).send({ error: 'Email and password are required!' });
    }

    advertiser.findOne({ Email })
    .where({Email:{$eq:Email}})
        .then(async (Advertiser) => {
            if (!Advertiser) {
                console.log('Email not found! Please enter a valid email');
                return res.status(404).send({ error: 'Email and  do not match!' });
            }

            // בדיקת סיסמה מוצפנת
            // const passwordIsValid = await bcrypt.compare(Password, Advertiser.Password);
            if (!Password) {
                console.log('The password is invalid! Please enter a valid password');
                return res.status(404).send({ error: 'Email and password do not match!' });
            }

            // יצירת אסימון
            const token = await jwt.sign(
                { Email },
                'HT2yg75FXgfvy',
                { expiresIn: '1h' }
            );

            // מחיקת הסיסמה מהתגובה
            // const { Password, ...advertiserData } = Advertiser._doc;
            res.status(200).send({ Advertiser, token });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send({ error: 'Internal Server Error' });
        });
};

// export const LogIn = (req, res) => {
//     try {
//         // בדיקת תקינות השדות
//         const { email, password } = req.body;
//         if (!email || !password) {
//             return res.status(400).send({ error: 'Email and password are required!' });
//         }

//         advertiser.findOne({ email })
//             .then(async (Advertiser) => {
//                 if (!Advertiser) {
//                     console.log('Email not found!');
//                     return res.status(404).send({ error: 'Email and password do not match!' });
//                 }

//                 // בדיקת סיסמה
//                 const passwordIsValid = await bcrypt.compare(password, Advertiser.password);
//                 if (!passwordIsValid) {
//                     console.log('Invalid password!');
//                     return res.status(404).send({ error: 'Email and password do not match!' });
//                 }

//                 // יצירת אסימון JWT
//                 const token = await jwt.sign(
//                     { email, advName: Advertiser.advName },
//                     'HT2yg75FXgfvy',
//                     { expiresIn: '1h' }
//                 );

//                 // מחיקת הסיסמה לפני החזרת הנתונים
//                 const { password, ...advertiserData } = Advertiser._doc;
//                 res.status(200).send({ Advertiser: advertiserData, token });
//             })
//             .catch(error => {
//                 res.status(500).send({ error: error.message });
//             });
//     } catch (error) {
//         res.status(500).send({ error: error.message });
//     }
// };

export const create = async (req, res) => {
    const { Email, Password, PhoneNumber, HomePhone, ArrApartments } = req.body;

    advertiser.find()
        .where({ Email })
        .then(async Advertiser => {
            if (Advertiser.length > 0) {
                return res.status(400).send({ error: 'email exists!' });
            }

            // הצפנת סיסמה
            const hashedPassword = await bcrypt.hash(Password, 10);

            const newAdvertiser = new advertiser({
                Email,
                Password:hashedPassword,
                hashedPassword,
                PhoneNumber,
                HomePhone,
                ArrApartments
            });

            newAdvertiser.save()
                .then(async advertiser => {
                    const token = await jwt.sign(
                        { Email: advertiser.Email, PhoneNumber: advertiser.PhoneNumber },
                        'HT2yg75FXgfvy',
                        { expiresIn: '1hr' }
                    );
                    res.status(200).send({ advertiser, token });
                })
                .catch(error => {
                    res.status(500).send({ error: error.message });
                });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
};
