import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  users:any;

  constructor(private fb:FormBuilder, private http:HttpClient,private router:Router) {

  }

  bookingform=this.fb.group({
   patientname:["",[Validators.required,Validators.minLength(8)]], //[phaceholder,[validatuon]]
   email:["",[Validators.required,Validators.minLength(3)]],
   phonenumber:["",[Validators.required,Validators.minLength(10)]],
   issues:["",[Validators.required,Validators.minLength(8)]]
  })

  booking(){
   this.http.post<any>("http://localhost:3000/booking",this.bookingform.value).subscribe(value=>{
     this.users=value;
     alert("Appointment Booking Successful");
     this.bookingform.reset();
     this.router.navigate(['home']);
   })
 }

  ngOnInit() {
  }

}
