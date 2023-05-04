import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceComponent } from './service/service.component';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { BloodbankComponent } from './bloodbank/bloodbank.component';
import { ScancenterComponent } from './scancenter/scancenter.component';
import { MedicineComponent } from './medicine/medicine.component';
import { FreecheckupComponent } from './freecheckup/freecheckup.component';
import { BookingComponent } from './booking/booking.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DepartmentComponent } from './department/department.component';
import { HeartComponent } from './heart/heart.component';
import { EyeComponent } from './eye/eye.component';
import { LungsComponent } from './lungs/lungs.component';
import { DiabitiesComponent } from './diabities/diabities.component';
import { DentalComponent } from './dental/dental.component';
import { DeactivateGuard } from './deactivate.guard';
import { PersonalinfoComponent } from './Personalinfo/Personalinfo.component';

@NgModule({
  declarations: [
    AppComponent,
      LoginComponent,
      HomeComponent,
      RegisterComponent,
      ServiceComponent,
      AmbulanceComponent,
      BloodbankComponent,
      ScancenterComponent,
      MedicineComponent,
      FreecheckupComponent,
      BookingComponent,
      DoctorsComponent,
      DepartmentComponent,
      HeartComponent,
      EyeComponent,
      LungsComponent,
      DiabitiesComponent,
      DentalComponent,
      PersonalinfoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
