import User from "../model/user";
import bcrypt from 'bcrypt';

export const postSignup = async(req,res)=>{
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
                    const newUser = {
                        username : req.body.username,
                        email : req.body.email,
                        password : hash
                    }

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