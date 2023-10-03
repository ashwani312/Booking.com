import Hotel from '../model/Hotel.js';
import Room from '../model/Room.js'

//---------crate a new hotel
export const createHotel = async(req, res, next) =>{
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        res.status(500).json(error);
    }
}


//--------update a hotel
export const updateHotel = async(req, res, next) =>{
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set : req.body}, {new : true});
        res.status(200).json(updatedHotel);
    } catch (error) {
        res.status(500).json(error);
    }
}

//-------delete the hotel
export const deletehotel = async(req, res, next) =>{
    try {
        const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedHotel);
    } catch (error) {
        res.status(500).json(error);
    }
}


//get a specific hotel
export const getSpecifiecHotel = async(req, res, next) =>{
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (error) {
        res.status(500).json(error);
    }
}

//----get all the hotels
export const getAllHotel = async(req, res, next) =>{
    const { min, max, ...others } = req.query;
    try {
      const hotels = await Hotel.find({
        ...others,
        cheapestPrice: { $gt: min | 1, $lt: max || 999 },
      }).limit(req.query.limit);
      res.status(200).json(hotels);
    } catch (err) {
      res.status(500).json(err);
    }
}

//count by city
export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Hotel.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
        res.status(500).json(err);
    }
  };


  //count by type
export const countByType = async (req, res, next) => {
    try {
        const hotelCount = await Hotel.countDocuments({ type: "hotel" });
        const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
        const resortCount = await Hotel.countDocuments({ type: "resort" });
        const villaCount = await Hotel.countDocuments({ type: "villa" });
        const cabinCount = await Hotel.countDocuments({ type: "cabin" });
    
        res.status(200).json([
          { type: "hotel", count: hotelCount },
          { type: "apartments", count: apartmentCount },
          { type: "resorts", count: resortCount },
          { type: "villas", count: villaCount },
          { type: "cabins", count: cabinCount },
        ]);
      } catch (err) {
        res.status(500).json(err);
      }
  };

  export const getHotelRooms = async (req, res, next) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      const list = await Promise.all(
        hotel.rooms.map((room) => {
          return Room.findById(room);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      res.status(500).json(err);
    }
  };