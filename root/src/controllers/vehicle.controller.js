import { Supabase } from "@supabase/supabase-js"
export const createVehicle = async (req, res) => {
    const { owner_id, vehicle_number,
        capacity,rate_per_km
    } =req.body;
    const {data,error} =await Supabase
    .from('vehicles')
    .insert([{
        owner_id,
        vehicle_number,
        capacity,
        rate_per_km
    }])
    if(error){
        res.status(400).json({error:error.message});
    }
    res.status(201).json(data)
}

