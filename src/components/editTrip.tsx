import { Dialog, Transition } from "@headlessui/react";
import React, { ChangeEvent } from "react";
import { FormEvent, Fragment } from "react";
import Trip from "../assets/class/trip";

interface editProps{
    open:boolean;
    setOpen:(open:boolean)=>void;
    handleEditTrip:(trip:Trip)=>void;
    trip:Trip;
}

export default function EditTrip(props:editProps){
    
    const {open} = props; const {setOpen} = props;

    function handleEditTrip(e:FormEvent){
        e.preventDefault();
        let trip = new Trip(props.trip.id,location,title,desc,props.trip.reservations,seats,time);
        props.handleEditTrip(trip);
        setOpen(false);
    }

    const [title,setTitle] = React.useState(props.trip.title);
    const [desc,setDesc] = React.useState(props.trip.description);
    const [seats,setSeats] = React.useState(props.trip.seats);
    const [time,setTime] = React.useState(props.trip.time);
    const [location,setLocation] = React.useState(props.trip.location);

    function handleTitleChange(e:ChangeEvent<HTMLInputElement>){setTitle(e.target.value)};
    function handleDescChange(e:ChangeEvent<HTMLTextAreaElement>){setDesc(e.target.value)};
    function handleSeatsChange(e:ChangeEvent<HTMLInputElement>){setSeats(parseInt(e.target.value))};
    function handleTimeChange(e:ChangeEvent<HTMLInputElement>){setTime(parseInt(e.target.value));};
    function handleLocationChange(e:ChangeEvent<HTMLInputElement>){setLocation(e.target.value)};
    
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
                                    Add new trip
                                    </Dialog.Title>
                                    <div className="mt-2">
                                    
                                    <div className="text-sm text-gray-500">
                                    <form onSubmit={handleEditTrip}>
                                        Add a trip on the list of trips that every user can see and reserve a spot
                                        <input onChange={handleTitleChange} value={title} id="title" type="text" placeholder="Title" name="title" className="mt-3 text-black font-medium inline-flex items-center justify-center border rounded leading-snug transition duration-150 ease-in-out px-3 py-3 shadow-sm hover:shadow-lg w-full mb-4" required></input>
                                        <textarea onChange={handleDescChange} value={desc} id="description" placeholder="Description" name="description" rows={3} className="text-black font-medium inline-flex items-center justify-center border rounded leading-snug transition duration-150 ease-in-out px-3 py-3 shadow-sm hover:shadow-lg w-full mb-4 resize-none" required></textarea>
                                        <input onChange={handleSeatsChange} value={seats} id="seats" type="number" placeholder="Number of seats" name="seats" className="text-black font-medium inline-flex items-center justify-center border rounded leading-snug transition duration-150 ease-in-out px-3 py-3 shadow-sm hover:shadow-lg w-full mb-4" required></input>
                                        <input onChange={handleLocationChange} value={location} id="location" type="text" placeholder="Location" name="location" className="text-black font-medium inline-flex items-center justify-center border rounded leading-snug transition duration-150 ease-in-out px-3 py-3 shadow-sm hover:shadow-lg w-full mb-4" required></input>
                                        <input onChange={handleTimeChange} value={time} id="time" type="number" placeholder="Time of the trip (In days)" name="time" className="text-black font-medium inline-flex items-center justify-center border rounded leading-snug transition duration-150 ease-in-out px-3 py-3 shadow-sm hover:shadow-lg w-full mb-4" required></input>
                                        <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-3">
                                            <button name="submit" className="w-full sm:w-auto"><div className="font-medium inline-flex items-center justify-center border rounded-lg leading-snug transition duration-150 ease-in-out px-8 py-3 shadow-lg text-white bg-green-700 hover:bg-green-800 w-full mb-4 sm:w-auto sm:mb-0">Apply <i className="ri-edit-2-line pl-2"></i></div></button>
                                        </div>
                                    </form>
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