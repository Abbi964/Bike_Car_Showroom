const express = require('express')
const appointmentController = require('../controller/appointmentController')

const appointmentRouter = express.Router();

// GET Slots
appointmentRouter.get('/getSlots/:dateStr',appointmentController.getSlots)

// POST Create
appointmentRouter.post('/create',appointmentController.create)


module.exports = appointmentRouter;