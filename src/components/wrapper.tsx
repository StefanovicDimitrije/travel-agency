import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import User from "../assets/class/user";
import Body from "./body";
import Footer from "./footer";
import Navigation from "./navigation";

interface wrapperProps{
    user:User;
}

export default function Wrapper(props:wrapperProps){
  useEffect(() => {
    document.title = "Travel Agency";   }, []);  
  return(
        <Body>
          <Navigation user={props.user}/>
            <main className='grow'>
              <Outlet/>
            </main>
          <Footer/>
        </Body>
    )
}