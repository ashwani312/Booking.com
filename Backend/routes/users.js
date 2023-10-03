import express from 'express';
import { deleteUser, getAllUser, getSpecifiecUser, updateUser } from '../controllers/userController.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyTokens.js';
const router = express.Router();



//update
router.put("/update/:id",verifyUser, updateUser);

//delete
router.delete("/delete/:id",verifyUser, deleteUser)

//get a specific hotel
router.get("/:id",verifyUser, getSpecifiecUser)

// get all hotel
router.get("/",verifyAdmin, getAllUser)


export default router;