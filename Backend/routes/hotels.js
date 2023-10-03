import express from 'express';
import { countByCity, countByType, createHotel, deletehotel, getAllHotel, getHotelRooms, getSpecifiecHotel, updateHotel } from '../controllers/hotelController.js';
import { verifyAdmin } from '../utils/verifyTokens.js';

const router = express.Router();

//create
router.post("/",verifyAdmin, createHotel)

//update
router.put("/update/:id",verifyAdmin, updateHotel);

//delete
router.delete("/delete/:id",verifyAdmin, deletehotel)

//get a specific hotel
router.get("/find/:id", getSpecifiecHotel)

// get all hotel
router.get("/", getAllHotel)

//
router.get("/countBycity", countByCity)


router.get("/countByType", countByType)

router.get("/room/:id", getHotelRooms)

export default router;