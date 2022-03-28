import Reservation from "./reservation";

export default class User{
    username:string;
    password:string;
    logged:Boolean;
    admin:Boolean;
    reservations:Reservation[];

    constructor(username:string = "undefined",password:string = "",logged:Boolean = false,admin:Boolean = false,reservations:any[] = []){
        this.username=username;
        this.password=password;
        this.logged=logged;
        this.admin=admin;
        this.reservations = reservations;
    }
}

/**
 * let user:User={
       username: "undefined",
       password: "undefined",
       logged: false,
       admin: false
 *  }
 */