import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Trip from "../assets/class/trip";

interface reservationsProps{
    trip:Trip;
    open:boolean;
    setOpen:(open:boolean)=>void;
}

export default function Reservations(props:reservationsProps){
    
    const {open} = props; const {setOpen} = props;

    if(props.trip.reservations.length===0){
        return(
    <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <Transition.Child as={Fragment}
                enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
                leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
            
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>
                <Transition.Child as={Fragment}
                    enter="ease-out duration-300"enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"leaveFrom="opacity-100 translate-y-0 sm:scale-100"leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                
                                <div className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                    Reservations for trip "{props.trip.title}"
                                    </Dialog.Title>
                                    <div className="mt-2 text-sm text-gray-500">
                                        <div className="text-left">
                                            There are currently no reservations for this trip
                                            <div className="mx-auto sm:max-w-none sm:flex sm:justify-center mt-3">
                                                <button onClick={()=>{setOpen(false)}} className="w-full "><div className="font-medium inline-flex items-center justify-center border rounded-lg leading-snug transition duration-150 ease-in-out px-8 py-3 shadow-lg text-white bg-red-700 hover:bg-red-800 w-full mb-4 sm:w-auto sm:mb-0">Close</div></button>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                </Transition.Child>

            </div>
        </Dialog>
    </Transition.Root>
        )
    }else{
    return(
        <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <Transition.Child as={Fragment}
                enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
                leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                    <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
            
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>
                <Transition.Child as={Fragment}
                    enter="ease-out duration-300"enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"leaveFrom="opacity-100 translate-y-0 sm:scale-100"leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                    Reservations for trip "{props.trip.title}"
                                    </Dialog.Title>
                                    <div className="mt-2">
                                    
                                    <div className="text-sm text-gray-500">
                                        
                                            View all the users that made reservations for the trip you chose
                                            <ul className="list-disc">
                                                {props.trip.reservations.map (res => <li>ID No: {res.idNo} {res.username}: {res.name} {res.surname} {">>"}cancelled: {(res.cancelled).toString()}</li>)}
                                            </ul>
                                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-3">
                                                <button onClick={()=>{setOpen(false)}} className="w-full sm:w-auto"><div className="font-medium inline-flex items-center justify-center border rounded-lg leading-snug transition duration-150 ease-in-out px-8 py-3 shadow-lg text-white bg-red-700 hover:bg-red-800 w-full mb-4 sm:w-auto sm:mb-0">Close</div></button>
                                            </div>
                                    </div>

                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                </Transition.Child>

            </div>
        </Dialog>
    </Transition.Root>
    )
    }
}