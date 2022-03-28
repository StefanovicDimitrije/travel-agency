import Reservation from "./reservation";

export default class Trip{
    id:number;
    title:string;
    description:string;
    reservations:Reservation[];
    seats:number;
    time:number;
    location:string;

    constructor(id:number=0,location:string="undefined",title:string = "undefined",description:string = "description",reservations:any[] = [],seats:number = 0,time:number=4){
        this.title=title;
        this.description=description;
        this.reservations=reservations;
        this.seats=seats;
        this.id=id;
        this.time = time;
        this.location=location;
    }
}