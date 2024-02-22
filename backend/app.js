// import dotenv from 'dotenv'
// import express from 'express';
// import mongoose from 'mongoose';
// import bodyParser from 'body-parser';
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// importing routes
// import userRouter from './routes/users.js';
const userRouter = require('./routes/users');

const app = express();
// configuring dotenv
// dotenv.config()

// using body-parser
app.use(bodyParser.json())

// using routes
app.use('/user',userRouter)

mongoose.connect(process.env.MONGO_DB_URL)
    .then(()=>{
        console.log('Connected to Mongo DB')
        app.listen(3000,()=>{
            console.log('Listening on port 3000')
        })
    })
    .catch((err)=>{
        console.log(err)
    })

