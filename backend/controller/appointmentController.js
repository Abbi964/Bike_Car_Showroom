const Appointment = require('../model/appointment')

exports.getSlots = async(req,res)=>{
    try{
        // getting date string
        const date = req.params.dateStr;

        // getting all the already appointed timesArr on that date
        let timeArr = await Appointment.find({date: date},{time : 1})

        console.log(timeArr)
        if (timeArr){
            res.status(200).json({timeArr})
        }
        else{
            res.status(500).json({msg : 'Something Went wrong'}) 
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({msg : 'Something Went wrong'})
    }
}

exports.create = async(req,res)=>{
    try{
        // getting appointmentObj
        const appointmentObj = req.body;

        // creating
        let newAppointment = new Appointment(appointmentObj)
        await newAppointment.save()

        res.status(201).json({success : true})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg : 'Something Went wrong'})
    }
}