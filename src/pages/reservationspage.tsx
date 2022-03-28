import User from "../assets/class/user";
import ReservationCard from "../components/reservationcards";

interface reservationProps{
    user:User;
}

export default function ReservationsPage(props:reservationProps){


    return(
    <>
    <h2 className="text-5xl md:text-6xl leading-tighter tracking-tighter my-4 text-gray-700 whitespace-nowrap leading-relaxed text-center">Your reservations</h2>
    <section className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

        {props.user.reservations.map (reservation => <ReservationCard reservation={reservation} key={reservation.resId}/>)}
    
    </section>
    </>
    );
}