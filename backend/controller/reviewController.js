const Review = require('../model/review')

exports.addReview = async(req,res)=>{
    try{
        const reviewObj = req.body

        // creating a new review
        let review = new Review(reviewObj)
        await review.save()

        res.status(201).json({success : true})
    }
    catch(err){
        console.log(err);
        res.status(500).json({msg : 'Something went wrong'})
    }
}

exports.getReviews = async(req,res)=>{
    try{
        const vehicleId = req.params.vehicleId;
        // geting reviews 
        let reviews = await Review.find({vehicleId : vehicleId})

        if(reviews){
            res.status(200).json({reviews})
        }
        else{
            res.status(500).json({msg : 'Something went wrong'})
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({msg : 'Something went wrong'})
    }
}