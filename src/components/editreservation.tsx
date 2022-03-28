import { Dialog, Transition } from "@headlessui/react";
import React, { ChangeEvent } from "react";
import { FormEvent, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Reservation from "../assets/class/reservation";

interface editResProps{
    open:boolean;
    setOpen:(open:boolean)=>void;
    reservation:Reservation;
    handleEditReserve:(res:any)=>void;
}

export default function EditReservation(props:editResProps){
    const {open} = props; const {setOpen} = props; const {reservation} = props;
    
    const navigate = useNavigate();

    function handleEditRes(e:FormEvent){
        e.preventDefault();
        let nReservation = new Reservation(reservation.resId,reservation.username,name,surname,idNo,reservation.cancelled,reservation.trip);
        props.handleEditReserve(nReservation);
        props.setOpen(false);
        navigate("/reservations");
    }

    const [name,setName] = React.useState(reservation.name);
    const [surname,setSurname] = React.useState(reservation.surname);
    const [idNo,setIdNo] = React.useState(reservation.idNo);

    function handleNameChange(e:ChangeEvent<HTMLInputElement>){setName(e.target.value)};
    function handleSurnameChange(e:ChangeEvent<HTMLInputElement>){setSurname(e.target.value)};
    function handleIdNoChange(e:ChangeEvent<HTMLInputElement>){setIdNo(parseInt(e.target.value))};

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
                                    Edit your reservation
                                    </Dialog.Title>
                                    <div className="mt-2">
                                    
                                    <div className="text-sm text-gray-500">
                                    <form onSubmit={handleEditRes}>
                                        Edit the information you've put into the reservation for the trip ''
                                        <label htmlFor="name" className="sr-only">Name:</label><input onChange={handleNameChange} value={name} id="name" type="text" placeholder="Your name" name="name" className="mt-3 text-black font-medium inline-flex items-center justify-center border rounded leading-snug transition duration-150 ease-in-out px-3 py-3 shadow-sm hover:shadow-lg w-full mb-4" required></input>
                                        <label htmlFor="surname" className="sr-only">Surname:</label><input onChange={handleSurnameChange} value={surname} id="surname" type="text" placeholder="Your surname" name="surname" className="text-black font-medium inline-flex items-center justify-center border rounded leading-snug transition duration-150 ease-in-out px-3 py-3 shadow-sm hover:shadow-lg w-full mb-4" required></input>
                                        <label htmlFor="idNo" className="sr-only">idNo:</label><input onChange={handleIdNoChange} value={idNo} id="idNo" type="number" placeholder="Your identification number" name="idNo" className="text-black font-medium inline-flex items-center justify-center border rounded leading-snug transition duration-150 ease-in-out px-3 py-3 shadow-sm hover:shadow-lg w-full mb-4" required></input>
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