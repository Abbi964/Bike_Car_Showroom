const express = require('express')
const reviewController = require('../controller/reviewController')

const reviewRouter = express.Router();

reviewRouter.post('/addReview',reviewController.addReview);

reviewRouter.get('/getReviews/:vehicleId',reviewController.getReviews);

module.exports = reviewRouter;