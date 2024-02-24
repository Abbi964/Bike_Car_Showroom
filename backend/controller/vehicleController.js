const Vehicle = require('../model/vehicle')

exports.getAllVehicles = async(req,res)=>{
    try{
        // getting all vehicles
        let vehicles = await Vehicle.find()

        res.status(200).json({vehicles})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg : "Something Went wrong"})
    }
}