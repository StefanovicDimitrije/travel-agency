import CancelledCards from "../components/cancelledcards";

interface cancelledProps{
    cancelled:any[];
}

export default function Cancelled(props:cancelledProps){
    return(
        <>
        <h2 className="text-5xl md:text-6xl leading-tighter tracking-tighter my-4 text-gray-700 whitespace-nowrap leading-relaxed text-center">Cancelled reservations and trips</h2>
        <section className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    
            {props.cancelled.map (cancelled => <CancelledCards cancelled={cancelled}/>)}
        
        </section>
        </>
        );
}