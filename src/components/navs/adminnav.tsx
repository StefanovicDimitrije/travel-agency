import { Link } from "react-router-dom";

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

import 'remixicon/fonts/remixicon.css'

export default function Adminnav(){
    return(
        <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to="/">
                         <span className="sr-only">Stefanovic Travel</span> <img alt="" className="h-11 w-auto sm:h-12" src={require ('../../assets/images/logo.png')}/>
                        </Link>
                    </div>

                    <div className="hidden md:flex justify-between items-center md:w-64 lg:w-72 flex-none">
                        <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900">Home</Link>
                        <Link to="/trips" className="text-base font-medium text-gray-500 hover:text-gray-900">Trips</Link>
                        <Link to="/cancelled" className="text-base font-medium text-gray-500 hover:text-gray-900">Cancelled</Link>
                        <Link to="/about" className="text-base font-medium text-gray-500 hover:text-gray-900">About</Link>
                    </div>

                    <div className="flex items-center md:hidden">
                        <Menu as="div" className="relative inline-block text-left">
                                
                                <Menu.Button className="inline-flex justify-center w-full rounded-md px-3 py-1 bg-white text-xl text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-700">
                                    <i className="ri-align-justify"></i>
                                </Menu.Button>

                            <Transition as={Fragment} enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100"
                                                      leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">

                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100">
                                <div className="py-1">
                                    <Menu.Item>
                                        <Link to="/" className="text-base block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg m-1">Home</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/trips" className="text-base block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg m-1">Trips</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/cancelled" className="text-base block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg m-1">Cancelled</Link>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <Link to="/about" className="text-base block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg m-1">About</Link>
                                    </Menu.Item>
                                </div>
                                <div className="py-1">
                                    <Menu.Item>
                                        <Link to="/profile" className="text-base block px-4 py-2 text-sm text-white bg-green-700 hover:bg-green-800 rounded-lg m-1">Admin</Link>
                                    </Menu.Item>
                                </div>
                                </Menu.Items>

                            </Transition>

                        </Menu>
                    </div>                   

                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <Link to="/profile" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-700 hover:bg-green-800">
                         Admin
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}