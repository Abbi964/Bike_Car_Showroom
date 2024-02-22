// import User from "../model/user";
// import bcrypt from 'bcrypt';
const User = require('../model/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.postSignup = async(req,res)=>{
    try{
        // checking if user already exists or not
        let result = await User.findOne({
            $or : [{username : req.body.username},{email : req.body.email}]
        })

        if (result){
            res.json({msg : 'User already exists'})
        }
        else{
            // hasing the password and creating a new user
            bcrypt.hash(req.body.password,10,async(error, hash)=>{
                if (error){
                    res.status(500).json({msg : 'Internal Server error'})
                }
                else{
                    const newUser = new User({
                        username : req.body.username,
                        email : req.body.email,
                        password : hash
                    })

                    let user = await newUser.save()
                    res.status(201).json({user})
                }
            })
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg : 'Internal Server Error'})
    }
}

exports.postLogin = async(req,res)=>{
    try{
        // trying to finduser
        let user = await User.findOne({email : req.body.email});

        if(!user){
            res.status(401).json({msg : 'User not found'})
        }
        else{
            // comparing the password
            bcrypt.compare(req.body.password,user.password,(err,same)=>{
                if(err){
                    res.status(500).json({msg : 'Something went wrong'})
                }
                else if (!same){
                    res.status(401).json({msg : 'Password does not match'})
                }
                else{
                    // sending JWT with id and admin info
                    let accessToken = jwt.sign({id : user._id, isAdmin : user.isAdmin},process.env.JWT_KEY)
                    res.status(200).json({accessToken})
                }
            })
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({msg : 'Something went wrong'})
    }
}