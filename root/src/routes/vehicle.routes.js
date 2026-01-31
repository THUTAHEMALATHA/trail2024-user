import express from "express"
import {createVehicle} from "../controllers/vehicle.controller.js";
import{createVehicleLimiter} from "../middlewares/rateLimiter.js";

const router =express.Router();

router.post('/create',

    createVehicleLimiter,createVehicle)
 export default router;
 