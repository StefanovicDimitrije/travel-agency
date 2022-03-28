import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Reservation from "../assets/class/reservation";
import Trip from "../assets/class/trip";
import User from "../assets/class/user";
import CancelTrip from "../components/canceltrip";
import EditReservation from "../components/editreservation";
import EditTrip from "../components/editTrip";
import Reservations from "../components/reservations";
import Reserve from "../components/reserve";

interface tripProps{
    trips:Trip[]
    setTrips:(trips:Trip[])=>void;
    user:User;
    setUser:(user:User)=>void;
    resId:number;
    setResId:(id:number)=>void;
    cancelled:any[];
    setCancelled:(cancelled:any[])=>void;
    removeTripsFromRes:(id:number)=>void;
}

export default function Tripi(props:tripProps){
    
    const navigate = useNavigate();

    const { tripId } = useParams<{tripId:string}>(); const index = props.trips.findIndex( (trip) => trip.id===(parseInt(tripId||"0")) )
    
    const trip = props.trips[index]; const {user} = props;

    const [open, setOpen] = React.useState(false);
    const [openEdit,setOpenEdit] = React.useState(false);
    const [openCancel,setOpenCancel] = React.useState(false);
    
    function handleEditReserve(res:Reservation){
        const resIndexTrip = trip.reservations.findIndex((reservation)=>reservation.username===user.username);
        
        let trip1 = trip;
        trip1.reservations[resIndexTrip] = res;

        let trips1 = props.trips;
        trips1[index] = trip1;
        props.setTrips(trips1);

        const resIndexUser = user.reservations.findIndex((reservation)=>reservation.username===user.username);
        let user1 = user;
        user1.reservations[resIndexUser] = res;
        props.setUser(user1);
    }

    function handleReserve(res:Reservation){
        if(trip.seats > 0){        
            trip.reservations.push(res);
            trip.seats--;

            let trips1 = props.trips;
            trips1[index] = trip;
            props.setTrips(trips1);
            let reservation = res;
            reservation.trip = trip;
            user.reservations.push(reservation);
            setOpen(false);
        }
    };

    function cancelReservation(reason:string){
        const resIndexUser = user.reservations.findIndex((reservation)=>reservation.username===user.username);
        
        let res = user.reservations[resIndexUser];
        res.cancelled = true;
        props.setCancelled([...props.cancelled,{reservation:res,reason:reason}]);

        let user1 = user;
        user1.reservations.splice(resIndexUser,1);
        props.setUser(user1);

        const resIndexTrip = trip.reservations.findIndex((reservation)=>reservation.username===user.username);
        let trip1 = trip;
        trip1.reservations.splice(resIndexTrip,1);
        trip1.seats++;
        let trips1 = props.trips;
        trips1[index] = trip1;
        props.setTrips(trips1);

        setOpen(false);
    }

    function handleEditTrip(tripNew:Trip){
        const index = props.trips.indexOf(trip);
        let trips1 = props.trips;
        trips1[index] = tripNew;
        props.setTrips(trips1);
    }

    function handleCancelTrip(reason:string){
        props.removeTripsFromRes(trip.id);

        let trips1 = props.trips;
        const index = props.trips.indexOf(trip);
        trips1.splice(index,1);
        props.setTrips(trips1);

        props.setCancelled([...props.cancelled,{trip:trip,reason:reason}]);
        
        setOpenCancel(false);
        navigate('/trips');
    }

    function removeTrip(){
        props.removeTripsFromRes(trip.id);
        let trips1 = props.trips;
        const index = props.trips.indexOf(trip);
        trips1.splice(index,1);
        props.setTrips(trips1);
        navigate('/trips');
    }

    if(user.admin){
        return(
        <div className="p-4">
            <h2 className="text-5xl md:text-6xl leading-tighter tracking-tighter my-4 text-gray-700 whitespace-nowrap leading-relaxed text-center">{trip.title}</h2>    
            <div className="w-full">
                <p className="text-gray-700 tracking-wide mb-3 max-w-md mx-auto">{trip.description}</p>
                <p className="text-gray-700 tracking-wide mb-3 max-w-md mx-auto">Length of the trip: {trip.time} days</p>
                <p className="text-gray-700 tracking-wide mb-6 max-w-md mx-auto">Location: {trip.location}</p>
            </div>
            <div className="w-full text-center">
                <button onClick={() => setOpen(true)} className="inline-flex justify-center border rounded-md px-3 py-1 bg-white text-xl text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-700">View reservations</button>
                <button onClick={() => setOpenEdit(true)} className="ml-3 inline-flex justify-center border rounded-md px-3 py-1 bg-white text-xl text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-700">Edit trip</button>            
                <button onClick={() => removeTrip()} className="ml-3 inline-flex justify-center border rounded-md px-3 py-1 bg-white text-xl text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-700">Delete trip</button>            
                <button onClick={() => setOpenCancel(true)} className="ml-0 mt-3 sm:ml-3 sm:mt-0 inline-flex justify-center border rounded-md px-3 py-1 bg-white text-xl text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-700">Cancel trip</button>            
            </div>
            
            <Reservations trip={trip} open={open} setOpen={setOpen}/>
            <EditTrip open={openEdit} setOpen={setOpenEdit} handleEditTrip={handleEditTrip} trip={trip}/>
            <CancelTrip open={openCancel} setOpen={setOpenCancel} handleCancelTrip={handleCancelTrip}/>
            
        </div>
        )

    }
    else if(user.logged)
    {
        if( trip.reservations.findIndex(res => res.username === user.username) !== -1 ){
            return(
            <div className="p-4">
                <h2 className="text-5xl md:text-6xl leading-tighter tracking-tighter my-4 text-gray-700 whitespace-nowrap leading-relaxed text-center">{trip.title}</h2>    
                <div className="w-full">
                    <p className="text-gray-700 tracking-wide mb-5 max-w-md mx-auto">{trip.description}</p>
                    <p className="text-gray-700 tracking-wide mb-3 max-w-md mx-auto">Length of the trip: {trip.time} days</p>
                    <p className="text-gray-700 tracking-wide mb-6 max-w-md mx-auto">Location: {trip.location}</p>
                </div>
                <div className="w-full text-center">
                    <button onClick={() => setOpen(true)} className="inline-flex justify-center border rounded-md px-3 py-1 bg-white text-xl text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-700">Cancel your reservation?</button>
                    <button onClick={() => setOpenEdit(true)} className="ml-3 inline-flex justify-center border rounded-md px-3 py-1 bg-white text-xl text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-700">Edit your reservation</button>
                </div>

                <Reserve open={open} setOpen={setOpen} handleReserve={handleReserve} trip={trip} user={user} resId={props.resId} setResId={props.setResId} cancelReservation={cancelReservation}/>
                <EditReservation open={openEdit} setOpen={setOpenEdit} reservation={trip.reservations[trip.reservations.findIndex((reservation)=>reservation.username===props.user.username)]} handleEditReserve={handleEditReserve}/>
            
            </div>
            );
        }
    else{
    return(
    <div className="p-4">
        <h2 className="text-5xl md:text-6xl leading-tighter tracking-tighter my-4 text-gray-700 whitespace-nowrap leading-relaxed text-center">{trip.title}</h2>    
        <div className="w-full">
            <p className="text-gray-700 tracking-wide mb-5 max-w-md mx-auto">{trip.description}</p>
            <p className="text-gray-700 tracking-wide mb-3 max-w-md mx-auto">Length of the trip: {trip.time} days</p>
            <p className="text-gray-700 tracking-wide mb-6 max-w-md mx-auto">Location: {trip.location}</p>
        </div>
        <div className="w-full text-center">
            <button onClick={() => setOpen(true)} className="inline-flex justify-center border rounded-md px-3 py-1 bg-white text-xl text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-700">Reserve your spot</button>
        </div>

        <Reserve open={open} setOpen={setOpen} handleReserve={handleReserve} trip={trip} user={user} resId={props.resId} setResId={props.setResId}  cancelReservation={cancelReservation}/>
        </div>
    )
    }
    }else{
        return(
    <div className="p-4">
        <h2 className="text-5xl md:text-6xl leading-tighter tracking-tighter my-4 text-gray-700 whitespace-nowrap leading-relaxed text-center">{trip.title}</h2>    
        <div className="w-full">
            <p className="text-gray-700 tracking-wide mb-5 max-w-md mx-auto">{trip.description}</p>
            <p className="text-gray-700 tracking-wide mb-3 max-w-md mx-auto">Length of the trip: {trip.time} days</p>
            <p className="text-gray-700 tracking-wide mb-6 max-w-md mx-auto">Location: {trip.location}</p>
        </div>
    </div>
        )
    }
}