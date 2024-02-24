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

exports.findVehicles = async(req,res)=>{
    try{
        let filterObj = req.body;

        // now making the '$match' fn for aggrigator based of filterObj
        let matchObj = {};

        for ( let key in filterObj){
            if (filterObj[key] !== 'all'){
                if (filterObj[key].charCodeAt(0) <= 57 ){  // first ele is a number meaning its a range
                    // spliting 
                    let min = +filterObj[key].split('-')[0]
                    let max = +filterObj[key].split('-')[1]
                    // adding filter in matchObj
                    matchObj[key] = { $gte: min, $lte : max }
                }
                else{ // it is not a range
                    // adding filter in matchObj
                    matchObj[key] = filterObj[key]
                }
            }
        }
        console.log(matchObj)
        // now using mongoose aggrigate to find vehicles
        let vehicles = await Vehicle.aggregate([
            {
                $match : matchObj
            }
        ])

        res.status(200).json({vehicles})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg : 'Something went wrong'})
    }
}