const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    review : String,
    rating : {
        type : Number,
        required : true
    },
    vehicleId : {
        type : mongoose.Types.ObjectId,
        required : true,
        ref : 'Vehicle'
    }
},{timestamps: true})

module.exports = mongoose.model('Review',reviewSchema)