const Vehicle = require('../model/vehicle');

exports.postCreateVehicle = async(req,res)=>{
    try{
        const user = req.user;
        const vehicleObj = req.body;
    
        // checking if user is admin or not
        if (user.isAdmin){
            // creating a new Vehicle
            let newVehicle = new Vehicle(vehicleObj)
            await newVehicle.save()
            res.status(201).json({success : true})
        }
        else{
            res.status(401).json({msg : "You are not authorized"})
        }

    }
    catch(err){
        console.log(err);
        res.status(500).json({msg : "Something went wrong"})
    }
}

exports.updateVehicle = async(req,res)=>{
    try{
        const user = req.user;
        const vehicleObj = req.body;
        const vehicleId = req.params.vehicleId

        // checking if user is admin or not
        if(user.isAdmin){
            // updating the vehicle
            await Vehicle.findByIdAndUpdate(vehicleId,vehicleObj)
            res.status(201).json({success : true})
        }
        else{
            res.status(401).json({msg : "You are not authorized"})
        }
    }
    catch(err){
        console.lgo(err)
        res.status(500).json({msg : "Something went wrong"})
    }
}

exports.deleteVehicle = async(req,res)=>{
    try{
        const user = req.user;
        const vehicleId = req.params.vehicleId;

        // checking if user is admin or not
        if(user.isAdmin){
            // deleting the vehicle
            await Vehicle.findByIdAndDelete(vehicleId)
            res.status(201).json({success : true})
        }
        else{
            res.status(401).json({msg : "You are not authorized"})
        }      
    }
    catch(err){
        console.log(err);
        res.status(500).json({msg : "Something went wrong"})
    }
}