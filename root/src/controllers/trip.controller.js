import express from "express";
import { supabase } from "../config/supabase";

export const createTrip = async(req,res)=>{
    const {customer_id, vehicle_id,distance km}=req.body;
    const {data:vehicle}=await supabase
    .from('vehicles5'
    .select('*')
    .eq('id',vehicle_id)
    .single()

    if(!vechicle.isavailable){
        return
        res.status(400).json({error:'vehicle is not available'});

    }
    const {data,error}=await
    supabase
    .from(trips5)
    .insert([{
        customer_id
  vehicle_id ,
distance_km   }])
    )
    await supabase
    .from(vehicles5)
    .update({isavailable:false})
    .eq('id',vehicle_id)

    if(error){
        return
        res.status(400).json({error: error.message})
    }
    res.status(201).json(data)
}

export const getTrip = async (req,res)=>{
    const {tripId}=req.params;
    const {data,error}=await supabase
    .from('trips5')
    .select('*')
    .eq('id',tripId)
    .single()
    if(error){
        return res.status(400).json({error:error.message})
    }
    res.status(200).json(data)
}
export const updateTrip = async (req,res)=>{
    const {tripId}=req.params;
    const {distance_km}=req.body;
    const {data,error}=await supabase
    .from('trips5')
    .update({distance_km})
    .eq('id',tripId)    
    
    if(error){
        return res.status(400).json({error:error.message})
    }   
    