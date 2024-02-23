const express = require('express')
const adminController = require('../controller/adminController');
const verifyToken = require('../middleware/verifyToken')

const adminRouter = express.Router();

// POST Create Vehicle
adminRouter.post('/create_vehicle',verifyToken,adminController.postCreateVehicle)

// PUT Update vehicle
adminRouter.put('/update_vehicle/:vehicleId',verifyToken,adminController.updateVehicle)

// DELETE Delete vehicle
adminRouter.delete('/delete_vehicle/:vehicleId',verifyToken,adminController.deleteVehicle)


module.exports = adminRouter;