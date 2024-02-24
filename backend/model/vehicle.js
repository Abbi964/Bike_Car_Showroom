const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({

    make : {type : String, required : true},
    model : {type : String, required : true},
    year : {type : Number, required : true},
    price : {type : Number, required : true},
    description : {type : String, required : true},
    isUsed : {type : Boolean, required : true},
    isCar : {type : Boolean, required : true},
    milage : {type : Number, required : true},
    fuel_type : {type : String, required : true},
    transmission : {type : String, required : true},
    body_type : {type : String, required : true},
    engine_size : {type : Number, required : true},
    color : {type : String, required : true},
    interior_features : {type : [String], required : true},
    images : {type : [String], required : true},
    availability : {type : Number, required : true},
},{timestamps : true})

module.exports = mongoose.model('Vehicle',vehicleSchema)