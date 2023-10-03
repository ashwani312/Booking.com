import express from 'express';
import { login, register } from '../controllers/authController.js';
import passport from 'passport';
const CLIENT_URL = "http://localhost:3000"
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/login/failed", (req, res) =>{
    res.status(401).json({
        success : false,
        message : "failure"
    })
})
router.get("/login/success", (req, res) =>{
    if(req.user){
        res.status(200).json({
            success : true,
            message : "success",
            user : req.user
        })
    }
})

router.get("/google", passport.authenticate("google", {scope : ["profile"]}))


router.get("/google/callback", passport.authenticate("google",{
    successRedirect : CLIENT_URL,
    failureRedirect : "/login/failed"
}))

export default router;