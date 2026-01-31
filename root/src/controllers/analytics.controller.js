import {supabase} from "../config/supabase.js";
export const getAnalytics = async (req,res) =>{
    const customers =await supabase.from('users5').select('*').eq('role','customer');
    const owners =await supabase.from('users5').select('*').eq('role','owner');
    const vehicles =await supabase.from('vehicles5').select('*');
    const rides =await supabase.from('trips5').select('*');
    res.status(200).json({
        total_customers:customers.count,
        total_owners:owners.count,
        total_vehicles:vehicles.count,
        total_rides:rides.count
    })
}