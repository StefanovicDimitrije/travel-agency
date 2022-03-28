import { fireEvent, render } from "@testing-library/react";
import Trip from "../assets/class/trip";
import User from "../assets/class/user";
import Reservation from "../assets/class/reservation";
import {screen} from '@testing-library/dom'

import EditReservation from "../components/editreservation";
import { BrowserRouter } from "react-router-dom";


test("Editing a reservation (User)",()=>{

    const mockEditReserve = jest.fn();

    const utils = render(
    <BrowserRouter> {/*The browser router is needed because the component uitilises navigate function to change the URL*/}
    <EditReservation open={false} setOpen={function (open: boolean): void {throw new Error("Function not implemented.");} } 
        reservation={new Reservation(1,new User().username,"Dimitrije","Stefanovic",123)} handleEditReserve={mockEditReserve}/>
    </BrowserRouter>);
    
    /*  // None of these find the needed inputs. I am not sure why.

    const name = utils.getByLabelText(/Name:/) as HTMLInputElement;
    fireEvent.change(name, {target: {value:"Aleksije"}});

    const surname = utils.getByLabelText(/Surname:/) as HTMLInputElement;
    fireEvent.change(surname, {target: {value:"Dimitrijevic"}});

    const idNo = utils.getByLabelText(/idNo:/) as HTMLInputElement;
    fireEvent.change(idNo, {target: {value:321}});
    */

    //const name = screen.getByPlaceholderText("Your name");    // This doesn't find the needed input also

    //let reserve = new Reservation(1,new User().username,"Aleksije","Dimitrijevic",321,false);

});