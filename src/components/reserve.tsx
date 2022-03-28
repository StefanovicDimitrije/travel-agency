import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import { ChangeEvent, FormEvent, Fragment } from "react";
import Reservation from "../assets/class/reservation";
import Trip from "../assets/class/trip";
import User from "../assets/class/user";

interface reserveProps{
    open:boolean;
    setOpen:(open:boolean)=>void;
    handleReserve:(para:any)=>void;
    trip:Trip;
    user:User;
    resId:number;
    setResId:(id:number)=>void;
    cancelReservation:(reason:string)=>void;
}

export default function Reserve(props:reserveProps){
    
    const {open} = props;
    const {setOpen} = props;
    const {user} = props;
    const {trip} = props;

    function handleReserve(e:FormEvent){
        e.preventDefault();
        //let reserve = {username:props.user.username,name:name,surname:surname,idNo:idNo,cancelled:false,resId:props.resId};
        let reserve = new Reservation(props.resId,props.user.username,name,surname,idNo,false);
        props.handleReserve(reserve);
        props.setResId(props.resId+1);
    }

    function cancelReservation(e:FormEvent){
        e.preventDefault();
        props.cancelReservation(reason);
    }

    const [reason,setReason] = React.useState("");

    function handleReasonChange(e:ChangeEvent<HTMLTextAreaElement>){setReason(e.target.value)}

    const [name,setName] = React.useState("");
    const [surname,setSurname] = React.useState("");
    const [idNo,setIdNo] = React.useState(0);

    function handleNameChange(e:ChangeEvent<HTMLInputElement>){setName(e.target.value)}
    function handleSurnameChange(e:ChangeEvent<HTMLInputElement>){setSurname(e.target.value)}
    function handleIdNoChange(e:ChangeEvent<HTMLInputElement>){setIdNo(parseInt(e.target.value))}

    if( trip.reservations.findIndex(res => res.username === user.username) !== -1 ){
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
                                    Cancel your reservation?
                                    </Dialog.Title>
                                    <div className="mt-2">
                                    
                                    <div className="text-sm text-gray-500">
                                        <form onSubmit={cancelReservation}>
                                            If anything happens you can always cancel your reservation. Do you wish to do it right now? If yes, please, tell us why
                                            <label htmlFor="cancelreason" className="sr-only">Reason:</label><textarea onChange={handleReasonChange} id="cancelreason" placeholder="Tell us the reason you are cancelling your reservations" name="cancelreason" rows={3} className="text-black font-medium inline-flex items-center justify-center border rounded leading-snug transition duration-150 ease-in-out px-3 py-3 shadow-sm hover:shadow-lg w-full mt-4 mb-2 resize-none" required></textarea>
                                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-3">
                                                <button name="submit" className="w-full sm:w-auto"><div className="font-medium inline-flex items-center justify-center border rounded-lg leading-snug transition duration-150 ease-in-out px-8 py-3 shadow-lg text-white bg-red-700 hover:bg-red-800 w-full mb-4 sm:w-auto sm:mb-0">Cancel you reservation <i className="ri-mail-forbid-line pl-2"></i></div></button>
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
    } else if(trip.seats === 0){
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
                                        Reserve your place
                                        </Dialog.Title>
                                        <div className="mt-2">
                                        
                                        <div className="text-sm text-gray-500">
                                            Sorry, at the moment, all seats for this trip are taken. Please contact us in case you think there was a mistake
                                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-3">
                                                <button name="submit" onClick={()=>{setOpen(false)}} className="w-full sm:w-auto"><div className="font-medium inline-flex items-center justify-center border rounded-lg leading-snug transition duration-150 ease-in-out px-8 py-3 shadow-lg text-white bg-green-700 hover:bg-green-800 w-full mb-4 sm:w-auto sm:mb-0">Sorry, there are no seats left <i className="ri-mail-forbid-line pl-2"></i></div></button>
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
    } else{
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
                                        Reserve your place
                                        </Dialog.Title>
                                        <div className="mt-2">
                                        
                                        <div className="text-sm text-gray-500">
                                        <form onSubmit={handleReserve}>
                                            Enter your personal information and save yourself a spot on this trip to make your vacation magical
                                            <label htmlFor="name" className="sr-only">Name:</label><input onChange={handleNameChange} id="name" type="text" placeholder="Name" name="name" className="mt-3 text-black font-medium inline-flex items-center justify-center border rounded leading-snug transition duration-150 ease-in-out px-3 py-3 shadow-sm hover:shadow-lg w-full mb-4 sm:mb-0" required></input>
                                            <label htmlFor="surname" className="sr-only">Surname:</label><input onChange={handleSurnameChange} id="surname" type="text" placeholder="Surname" name="surname" className="mt-3 text-black font-medium inline-flex items-center justify-center border rounded leading-snug transition duration-150 ease-in-out px-3 py-3 shadow-sm hover:shadow-lg w-full mb-4 sm:mb-0" required></input>
                                            <label htmlFor="idNo" className="sr-only">idNo:</label><input onChange={handleIdNoChange} id="idNo" type="number" placeholder="Id number" name="idNo" className="mt-3 text-black font-medium inline-flex items-center justify-center border rounded leading-snug transition duration-150 ease-in-out px-3 py-3 shadow-sm hover:shadow-lg w-full mb-4 sm:mb-0" required></input>
                                            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mt-3">
                                                <button name="submit" className="w-full sm:w-auto"><div className="font-medium inline-flex items-center justify-center border rounded-lg leading-snug transition duration-150 ease-in-out px-8 py-3 shadow-lg text-white bg-green-700 hover:bg-green-800 w-full mb-4 sm:w-auto sm:mb-0">Reserve your spot<i className="ri-mail-send-line pl-2"></i></div></button>
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
}