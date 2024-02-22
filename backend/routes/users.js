import express from "express";
import {postSignup} from '../controller/user'

const router = express.Router()

router.post('/signup',postSignup)

module.exports = router;