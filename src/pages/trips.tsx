import React from "react";
import { Route, Routes } from "react-router-dom";
import Trip from "../assets/class/trip";
import User from "../assets/class/user";
import Tripi from "./tripi";
import Tripslist from "./tripslist";

interface tripProps{
    user:User;
    setUser:(user:User)=>void;
    trips:Trip[];
    setTrips:(trips:Trip[])=>void;
    tripId:number;
    setId:(id:number)=>void;
    resId:number;
    setResId:(id:number)=>void;
    cancelled:any[];
    setCancelled:(cancelled:any[])=>void;
    removeTripsFromRes:(id:number)=>void;
}

export default function Trips(props:tripProps){
    const {user} = props; const {trips} = props; const {setTrips} = props;
    
    

    return(
            <Routes>
                <Route index element={<Tripslist trips={trips} setTrips={setTrips} user={user} tripId={props.tripId} setId={props.setId}/>}/>
                <Route path=":tripId" element={<Tripi trips={trips} setTrips={setTrips} user={user} setUser={props.setUser} resId={props.resId} setResId={props.setResId} cancelled={props.cancelled} setCancelled={props.setCancelled} removeTripsFromRes={props.removeTripsFromRes}/>}/>
            </Routes>
        )
}