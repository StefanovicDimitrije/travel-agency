import { Link } from "react-router-dom";
import Trip from "../assets/class/trip";

interface cardProps{
    trip:Trip;
}

export default function TripCards(props:cardProps){
    
    const {trip} = props;

    return(
    <div className="bg-white shadow-lg rounded-lg">
        <div className="pt-3">
            <div className="pt-6 pb-4 px-5">
              <h1 className="text-gray-700 font-bold text-2xl mb-1 overflow-clip overflow-hidden h-9">{trip.title}</h1>
              <p className="overflow-clip overflow-hidden text-gray-700 tracking-wide h-7 mb-1">Location: {trip.location}</p>
              <p className="overflow-clip overflow-hidden text-gray-700 tracking-wide mb-3 h-24">{trip.description}</p>
              <p className="overflow-clip overflow-hidden text-gray-700 tracking-wide h-12">Length: {trip.time} days</p>
              <button className="text-base block px-4 py-2 text-sm text-white bg-green-700 hover:bg-green-800 rounded-lg">
                <Link to={""+trip.id}>
                    View more
                </Link>
              </button>
            </div>
        </div>
    </div>
    )
}