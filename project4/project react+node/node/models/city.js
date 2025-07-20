import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
    CityName: {
        type: String,
        required: true,
    },
    Apartments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Apartment', 
        },
    ],
})

export default mongoose.model('City', citySchema)