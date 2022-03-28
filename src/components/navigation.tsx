import User from "../assets/class/user";

import Adminnav from "./navs/adminnav";
import Guestnav from "./navs/guestnav";
import Usernav from "./navs/usernav";

interface Navprops{
    user: User
}

export default function Navigation(props:Navprops){
    
    const {logged} = props.user;
    const {admin} = props.user;

    //console.log(props.user);

    if(logged){
        if(admin){return(<Adminnav/>)} // If logged in and admin add the nav which leads to admin functionalities
            else{return(<Usernav user={props.user}/>)} // If only logged in show just the nav which leads to reg user functionalities
    } else{return(<Guestnav/>)} // If not even logged in just show the guest links
    
}

/**
 * * * Guest navigation
 * - Home
 * - Trips
 * - About
 * 
 * * * User navigation
 * - Home
 * - Trips (On trip page reserve button)
 * - Your reservations (Cancel reservation)
 * - About
 * 
 * * * Admin navigation
 * - Home
 * - Managa trips (Edit, add, cancel)
 * - View reservations
 * - Cancelled resrvations/trips
 */