const express = require('express')
const vehicleController = require('../controller/vehicleController')

const vehicleRouter = express.Router();

vehicleRouter.get('/all_vehicles',vehicleController.getAllVehicles);

vehicleRouter.post('/find',vehicleController.findVehicles);

module.exports = vehicleRouter;