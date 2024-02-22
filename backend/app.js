import dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// importing routes
import userRoutes from './routes/users';

const app = express();
// configuring dotenv
dotenv.config()

// using body-parser
app.use(bodyParser.json())

// using routes
app.use('/user',userRoutes)

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

