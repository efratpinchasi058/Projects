import mongoose from "mongoose";

const advertiserSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
        null: true,
        unique: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ 
    },
    Password:{
        type: String,   
        required: true,  
        minLength:6,
      
    },
    PhoneNumber: {  
        type: String,  
        required: true,  
        minLength:9,
        maxLength: 10

    },
    HomePhone: {  
        type: String,  
        minLength:8,
        maxLength: 9  
    },
   ArrApartments:[
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Apartment'
    }

   ]

    })

export default mongoose.model('advertiser', advertiserSchema)