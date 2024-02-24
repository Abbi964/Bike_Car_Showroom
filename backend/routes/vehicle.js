const express = require('express')
const vehicleController = require('../controller/vehicleController')

const vehicleRouter = express.Router();

vehicleRouter.get('/all_vehicles',vehicleController.getAllVehicles);

module.exports = vehicleRouter;