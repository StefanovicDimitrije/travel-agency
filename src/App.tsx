import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";

// Pages (And the wrapper)
import Wrapper from './components/wrapper';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Trips from './pages/trips';
import Profile from './pages/profile';
import ReservationsPage from './pages/reservationspage';
import Cancelled from './pages/cancelled';
import About from './pages/about';


// Classes
import User from './assets/class/user';
import Trip from './assets/class/trip';

//Styles
//import 'tailwindcss/tailwind.css'
import 'remixicon/fonts/remixicon.css'
import "./dist/output.css"
import './assets/styles/custom.css'

//import reportWebVitals from './reportWebVitals';

export default function App() {

  const [user,setUser] = React.useState(new User());
  const [users,setUsers] = React.useState<User[]>([{"username":"user","password":"123","logged":false,"admin":false,"reservations":[]},{"username":"admin","password":"123","logged":false,"admin":true,"reservations":[]}]);
  const [trips,setTrips] = React.useState<Trip[]>([new Trip(0,"Bora Bora","Warm waters of Bora Bora","Take your feet out and enjoy the perfect harmony of Bora Bora and other islands of the French Polynesia in this one of a kind journey across the world",[],3,5),new Trip(1,"Pisa","Pisa's rich history","Expirience the rich history and even tastier food of the beautiful Italy and the town of Pisa",[],0,9),
              new Trip(2,"Budapest","The Blue Danube","Travel and explore the Europe at its best! Explore the city on your own or take the trip across the beautiful Danube",[],2,4),new Trip(3,"Belgrade","Neon Belgrade","Have the time of your life and meet some of the friendliest people in all of Europe in this trip of a lifetime",[],5,15)]);
  const [cancelled,setCancelled] = React.useState<any[]>([]);

  const [tripId,setId] = React.useState(4);
  const [resId,setResId] = React.useState(0);

  function addUser(user:User){
    setUsers([...users,user])
  }

  function removeTripsFromRes(id:number){
    users.forEach(user => {
      user.reservations.forEach(reservation => {
        if(reservation.trip.id===id){
          let index = user.reservations.indexOf(reservation);
          user.reservations.splice(index,1);
        }
      });
    });
  }

  /**  
  The '/' path is only for the Wrapper and contains the nav at the top, the footer at the bottom 
  and outlet tag in the middle for displaying the content of each page
  The index path is the one that displays below the nav (in the outlet tag) on the default page
  And everything below is the child element
    If you have a new parent element you need to utilise the outlet again 
    so that the child elements can be rendered there (if not everywhere)
  **/
 
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrapper user={user}/>}>
            <Route index element={<Home user={user}/>}/>
            <Route path="login" element={<Login setUser={setUser} users={users}/>}/>
            <Route path="register" element={<Register addUser={addUser}/>}/> 
            <Route path="trips/*" element={<Trips user={user} setUser={setUser} trips={trips} setTrips={setTrips} tripId={tripId} setId={setId} resId={resId} setResId={setResId} cancelled={cancelled} setCancelled={setCancelled} removeTripsFromRes={removeTripsFromRes}/>}> 
              <Route path=":tripId" element={<Trips user={user} setUser={setUser} trips={trips} setTrips={setTrips} tripId={tripId} setId={setId} resId={resId} setResId={setResId} cancelled={cancelled} setCancelled={setCancelled} removeTripsFromRes={removeTripsFromRes}/>}/>
            </Route>
            <Route path="reservations" element={<ReservationsPage user={user}/>}/>      
            <Route path="cancelled" element={<Cancelled cancelled={cancelled}/>}/> 
            <Route path="profile" element={<Profile user={user} setUser={setUser}/>}/>
            <Route path="about" element={<About/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}