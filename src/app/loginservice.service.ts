import { Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  isLoggedIn : boolean=false;
  username: any="";
  password:any="";

constructor() { }

userLoggedIn(username:any,password:any){
  this.username=username;
  this.password=password;
  this.isLoggedIn=true;
  return of(this.isLoggedIn);
}


isuserLoggedIn():boolean{
  return this.isLoggedIn;
}

isAdminUser():boolean{
  // console.log("un"+this.username)
  if(this.username=="useradmin",this.password=="12345678"){
    return true;
  }
  return false;
}

userLoggedout():void{
  this.isLoggedIn=false;
}

}
