import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
     CategoryName: {
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

export default mongoose.model('Category',categorySchema )