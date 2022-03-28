interface cancelCardsProps{
    cancelled:any;
}

export default function CancelledCards(props:cancelCardsProps){
    const {cancelled} = props; 
    
    if(cancelled.hasOwnProperty("reservation")){

    return(
    <div className="bg-white shadow-lg rounded-lg">
        <div className="pt-3">
            <div className="pt-6 pb-4 px-5">
            <h1 className="text-gray-700 font-bold text-2xl mb-1 overflow-clip overflow-hidden h-9">Cancelled reservation for the trip "{cancelled.reservation.trip.title}"</h1>
            <p className="overflow-clip overflow-hidden text-gray-700 tracking-wide h-7 mb-1">Location of the trip was: {cancelled.reservation.trip.location}</p>
            <p className="overflow-clip overflow-hidden text-gray-700 tracking-wide mb-3 h-6">And lasts: {cancelled.reservation.trip.time} days</p>
            <p className="text-gray-700 tracking-wide mb-3">Originally registered under: {cancelled.reservation.name} {cancelled.reservation.surname} {cancelled.reservation.idNo}</p>
            <p className="overflow-clip overflow-hidden text-gray-700 tracking-wide mb-3 h-24">Reason for cancellation: {cancelled.reason}</p>
        </div>
        </div>
    </div>
    );
    } else{
        return(
            <div className="bg-white shadow-lg rounded-lg">
                <div className="pt-3">
                    <div className="pt-6 pb-4 px-5">
                    <h1 className="text-gray-700 font-bold text-2xl mb-1 overflow-clip overflow-hidden h-9">Trip "{cancelled.trip.title}" was cancelled</h1>
                    <p className="overflow-clip overflow-hidden text-gray-700 tracking-wide h-7 mb-1">Location of the trip was: {cancelled.trip.location}</p>
                    <p className="overflow-clip overflow-hidden text-gray-700 tracking-wide mb-3 h-24">With the description: {cancelled.trip.description}</p>
                    <p className="overflow-clip overflow-hidden text-gray-700 tracking-wide mb-3 h-6">And the length of: {cancelled.trip.time} days</p>
                    <p className="text-gray-700 tracking-wide mb-3">The reason being: {cancelled.reason}</p>
                </div>
                </div>
            </div>
            );
    }
}