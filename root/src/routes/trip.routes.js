import express from "express";
import{
    createTrip,
    getTrip,
    updateTrip,
    deleteTrip,
    endTrip
} from "../controllers/trip.controller.js";import router from "./vehicle.routes.js";
;

 router.post('/create',createTrip);
 router.get('/tripId',getTrip);
 router.patch('/update/:tripId',updateTrip);
 router.delete('/delete/:tripId',deleteTrip);
 router.post('/end/:tripId',endTrip);

 export default router
