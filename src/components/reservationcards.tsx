import { Link } from "react-router-dom";
import Reservation from "../assets/class/reservation";

interface reservationCardProps{
    reservation:Reservation;
}

export default function ReservationCard(props:reservationCardProps){
    const {reservation} = props;
    
    return(
    <div className="bg-white shadow-lg rounded-lg">
        <div className="pt-3">
            <div className="pt-6 pb-4 px-5">
            <h1 className="text-gray-700 font-bold text-2xl mb-1 overflow-clip overflow-hidden h-9">{reservation.trip.title}</h1>
            <p className="overflow-clip overflow-hidden text-gray-700 tracking-wide h-7 mb-1">Location: {reservation.trip.location}</p>
            <p className="overflow-clip overflow-hidden text-gray-700 tracking-wide mb-3 h-24">{reservation.trip.description}</p>
            <p className="overflow-clip overflow-hidden text-gray-700 tracking-wide mb-3 h-6">Length: {reservation.trip.time} days</p>
            <p className="text-gray-700 tracking-wide mb-3">Registered under: {reservation.name} {reservation.surname} {reservation.idNo}</p>
            <div className="w-full">
                <div className="mx-auto">
                <button className="w-full xl:ml-0 text-base px-4 py-2 text-sm text-white bg-green-700 hover:bg-green-800 rounded-lg">
                    <Link to={"/trips/"+props.reservation.trip.id}> Open trip info </Link>
                </button>
                </div>
            </div>
        </div>
        </div>
    </div>
)
}