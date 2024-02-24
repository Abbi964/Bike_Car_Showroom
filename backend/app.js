// import dotenv from 'dotenv'
// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

// importing routes
// import userRouter from './routes/users.js';
const userRouter = require('./routes/users');
const adminRouter = require('./routes/admin');
const vehicleRouter = require('./routes/vehicle')

const app = express();
// configuring dotenv
// dotenv.config()
app.use(cors())

// using body-parser
app.use(bodyParser.json())

// using routes
app.use('/user',userRouter)
app.use('/admin',adminRouter)
app.use('/vehicle',vehicleRouter)

mongoose.connect(process.env.MONGO_DB_URL)
    .then(()=>{
        console.log('Connected to Mongo DB')
        app.listen(5000,()=>{
            console.log('Listening on port 5000')
        })
    })
    .catch((err)=>{
        console.log(err)
    })

