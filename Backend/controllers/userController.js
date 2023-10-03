import User from '../model/User.js';


//--------update a User
export const updateUser = async(req, res, next) =>{
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set : req.body}, {new : true});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
}

//-------delete the User
export const deleteUser = async(req, res, next) =>{
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(500).json(error);
    }
}


//get a specific User
export const getSpecifiecUser = async(req, res, next) =>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}

//----get all the Users
export const getAllUser = async(req, res, next) =>{
    try {
        const Users = await User.find();
        res.status(200).json(Users);
    } catch (error) {
        res.status(500).json(error);
    }
}