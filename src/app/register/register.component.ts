import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmedValidator } from '../confirm';

@Component({
  selector: 'app-reactivelogin',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  users:any;

  reactiveloginForm=new FormGroup({
    username:new FormControl(""),
    password:new FormControl(),
    cpassword:new FormControl()
  });

  constructor(private fb:FormBuilder, private http:HttpClient,private router:Router) {

   }

   reactiveloginForm1=this.fb.group({
    username:["",[Validators.required,Validators.minLength(8)]], //[phaceholder,[validatuon]]
    email:["",[Validators.required,Validators.minLength(3)]],
    password:["",[Validators.required,Validators.minLength(8)]],
    cpassword:["",[Validators.required,Validators.minLength(8)]]
   },{validator:ConfirmedValidator('password','cpassword')})

   register(){
    this.http.post<any>("http://localhost:3000/users",this.reactiveloginForm1.value).subscribe(value=>{
      this.users=value;
      alert("User Register Successful");
      this.reactiveloginForm1.reset();
      this.router.navigate(['login']);
    })
  }


  ngOnInit(){



  }

}
