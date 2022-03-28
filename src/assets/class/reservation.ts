import Trip from "./trip";

export default class Reservation{
    resId:number;
    username:string;
    name:string;
    surname:string;
    idNo:number;
    cancelled:boolean;
    trip:Trip;

    constructor(resId:number,username:string,name:string,surname:string,idNo:number, cancelled:boolean=false,trip:Trip=new Trip()){
        this.resId = resId; 
        this.username = username;
        this.name = name;
        this.surname = surname;
        this.idNo = idNo;
        this.cancelled = cancelled;    
        this.trip = trip;
    }
}