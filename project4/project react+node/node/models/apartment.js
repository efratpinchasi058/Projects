import mongoose from "mongoose";
const ApartmentSchema = new mongoose.Schema({
    NameApartment:String,
    Description: String,
    // Image: { 
    //     type: String 
    // },
     CodeCategory: {
        type: mongoose.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    CodeCity: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'City', 
         required: true 
        },
    Adress:{
        type:String,
        required: true
    },
    NumBed:{
        type:Number,
        required: true
    },
    Additives:[{ type: String }],
    Price:{
        type:  Number,
        required: true
    } ,

    CodeAdvertisement:{
        type:String,
        required: true
    },
})
export default mongoose.model('Apartment', ApartmentSchema)