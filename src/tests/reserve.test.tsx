import { fireEvent, render } from "@testing-library/react";
import Trip from "../assets/class/trip";
import User from "../assets/class/user";
import Reserve from "./../components/reserve";
import {screen} from '@testing-library/dom'
import Reservation from "../assets/class/reservation";

test("Reserving a seat on a trip (User)",()=>{
    const mockHandleReserve = jest.fn();
    const mockSetResId = jest.fn();

    const utils = render(<Reserve open={true} setOpen={function (open: boolean): void {throw new Error("Function not implemented.");} } 
        handleReserve={mockHandleReserve} 
        trip={new Trip(0,"title","description","location",[],1)} user={new User()} resId={0} setResId={mockSetResId} 
        cancelReservation={function (reason: string): void {throw new Error("Function not implemented.");} }/>);

    const name = utils.getByLabelText(/Name:/) as HTMLInputElement;
    fireEvent.change(name, {target: {value:"Dimitrije"}});
    
    const surname = utils.getByLabelText(/Surname:/) as HTMLInputElement;
    fireEvent.change(surname, {target: {value:"Stefanovic"}});

    const idNo = utils.getByLabelText(/idNo:/) as HTMLInputElement;
    fireEvent.change(idNo, {target: {value:123}});

    let reserve = new Reservation(0,new User().username,"Dimitrije","Stefanovic",123,false);

    fireEvent.click(utils.getByText(/Reserve your spot/));

    expect(mockHandleReserve).toHaveBeenCalledWith(reserve);
});

/*  // This whole test won't run, throwing an error saying "IntersectionObserver" is not defined
    // I am not sure how is that possible when I havent even attempted to call such a variable
test("Cancelling a reservation with a reason (User)",()=>{
    const mockCancelReservation = jest.fn();

    const utils = render(<Reserve open={true} setOpen={function (open: boolean): void {throw new Error("Function not implemented.");} } 
        handleReserve={function (para: any): void {throw new Error("Function not implemented.");} } 
        trip={new Trip(0,"title","description","location",[new Reservation(0,new User().username,"Dimitrije","Stefanovic",123,false)],1)} user={new User()} resId={0} setResId={function (id: number): void {throw new Error("Function not implemented.");} } 
        cancelReservation={mockCancelReservation}/>);

    const reason = utils.getByLabelText(/Reason:/) as HTMLTextAreaElement;
    fireEvent.change(reason, {target: {value:"Some reason"}});

    fireEvent.click(utils.getByText(/Cancel you reservation/));

    expect(mockCancelReservation).toHaveBeenCalledWith("Some reason");
});
*/

/**
 * const utils = render(<Reserve open={true} setOpen={function (open: boolean): void {throw new Error("Function not implemented.");} } 
        handleReserve={function (para: any): void {throw new Error("Function not implemented.");} } 
        trip={new Trip(0,"title","description","location",[],1)} user={new User()} resId={0} setResId={function (id: number): void {throw new Error("Function not implemented.");} } 
        cancelReservation={function (reason: string): void {throw new Error("Function not implemented.");} }/>);
 */