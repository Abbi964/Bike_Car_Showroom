// import express from "express";
// import {postSignup} from '../controller/userController'
const express = require('express')
const userController = require('../controller/userController')

const userRouter = express.Router()

// POST SIGNUP
userRouter.post('/signup',userController.postSignup);

// POST LOGIN
userRouter.post('/login',userController.postLogin)

module.exports = userRouter;