import React, { ChangeEvent } from "react";
import Trip from "../assets/class/trip";
import User from "../assets/class/user";
import AddTrip from "../components/addtrip";
import TripCards from "../components/tripcards";

interface tripProps{
    trips:Trip[];
    user:User;
    setTrips:(trips:Trip[])=>void;
    tripId:number;
    setId:(id:number)=>void;
}

export default function Tripslist(props:tripProps){

    const {user} = props;
    const {setTrips} = props;

    const [trips,setTrips1] = React.useState(props.trips);
    const [labeltext,setLabel] = React.useState("Sort by time Asc/Des")

    const [open, setOpen] = React.useState(false);

    function compare( a:Trip, b:Trip ) {
        return a.time - b.time;
    }

    function mcompare( a:Trip, b:Trip ) {
        return -(a.time - b.time);
    }

    function handleSort(e:ChangeEvent<HTMLInputElement>){
        if(e.target.checked){
            let trips1 = [...trips];
            trips1.sort(compare);

            setLabel("Sort by time (Asc)");
            setTrips1(trips1);
        }else{
            let trips1 = [...trips];
            trips1.sort(mcompare);
            
            setLabel("Sort by time (Des)");
            setTrips1(trips1);
        }
    }

    if(user.admin){
        return(
        <>
        <h2 className="text-5xl md:text-6xl leading-tighter tracking-tighter my-4 text-gray-700 whitespace-nowrap leading-relaxed text-center">Available trips</h2>
        <div className="w-full text-center">
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input onChange={handleSort} type="checkbox" name="toggle" id="toggle" className="right-0 border-green-700 bg-green-700 checked:left-0 absolute block w-6 h-6 rounded-full border-4 appearance-none cursor-pointer"/>
                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
            <span className="mr-3">{labeltext}</span>
            <button onClick={() => setOpen(true)} className="inline-flex justify-center border rounded-md px-3 py-1 bg-white text-xl text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-700">Add new trip</button>
        </div>
        <section className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">        
         
            {trips.map (trip => <TripCards trip={trip} key={trip.id}/>)}
        
        </section>
        <AddTrip open={open} setOpen={setOpen} setTrips={setTrips} trips={trips} tripId={props.tripId} setId={props.setId} setTrips1={setTrips1}/>
        </>
        )
    } else{
    return(
        <>
        <h2 className="text-5xl md:text-6xl leading-tighter tracking-tighter my-4 text-gray-700 whitespace-nowrap leading-relaxed text-center">Available trips</h2>
        <div className="w-full text-center">
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input onChange={handleSort} type="checkbox" name="toggle" id="toggle" className="right-0 border-green-700 bg-green-700 checked:left-0 absolute block w-6 h-6 rounded-full border-4 appearance-none cursor-pointer"/>
                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
            <span>{labeltext}</span>
        </div>
        <section className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

            {trips.map (trip => <TripCards trip={trip} key={trip.id}/>)}

        </section>
        </>
    )
    }
}