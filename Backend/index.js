import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import roomsRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotels.js";
import cookieParser from 'cookie-parser';
import passport from 'passport';
import cookieSession from 'cookie-session';
import cors from 'cors';
import passportSetup from "./utils/passport.js"
const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/hotelBooking");
    } catch (error) {
        throw error;
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected");
})
mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected");
})

// -------middelewares------

app.use(cookieParser());
app.use(express.json());
app.use(cookieSession({
    name : "session",
    keys : ["ashwani"],
    maxAge : 24 * 60 * 60 * 100
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin : "http://localhost:3000",
    methods : "GET, POST, PUT, DELETE",
    credentials : true
}))

//route middleware
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);



// app.use((err, req, res, next)=>{
//     const errorStatus = err.status || 500;
//     const errorMessage = err.massage || "something went wrong!"
//     return res.status(errorStatus).json({
//         success : false,
//         status : errorStatus,
//         massege : errorMessage,
//         stack : err.stack
//     })
// })

//---------listen on the port-------------
app.listen(8800, () => {
    connect()
    console.log("connected to backend on port " + 8800);
})