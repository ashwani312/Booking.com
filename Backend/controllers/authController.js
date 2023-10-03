import User from "../model/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//--register
export const register = async (req, res, next) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })

        const user = await newUser.save();
        res.status(200).json({
            success: true,
            massege: "user is succesfully created",
            user: user
        });

    } catch (error) {
        res.status(500).json(error);
    }
}

//--------login------
export const login = async (req, res, next) => {


    try {
        const user = await User.findOne({
            username: req.body.username
        })
        if (!user) {
            return res.status(404).json("User not found")
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json("Wrong password or username");
        }
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);
        const { password, isAdmin, ...otherDetails } = user._doc;
        res
            .cookie("access_token", token, {
                httpOnly: true
            })
            .status(200)
            .json({
                success: true,
                massege: "user is succesfully logedIn",
                user: { ...otherDetails }
            });

    } catch (error) {
        res.status(500).json(error);
    }
}