import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { BloodbankComponent } from './bloodbank/bloodbank.component';
import { BookingComponent } from './booking/booking.component';
import { DentalComponent } from './dental/dental.component';
import { DepartmentComponent } from './department/department.component';
import { DiabitiesComponent } from './diabities/diabities.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { EyeComponent } from './eye/eye.component';
import { FreecheckupComponent } from './freecheckup/freecheckup.component';
import { HeartComponent } from './heart/heart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LungsComponent } from './lungs/lungs.component';
import { MedicineComponent } from './medicine/medicine.component';
import { RegisterComponent } from './register/register.component';
import { ScancenterComponent } from './scancenter/scancenter.component';
import { ServiceComponent } from './service/service.component';
import { AuthenticationGuard } from './authentication.guard';
import { DeactivateGuard } from './deactivate.guard';
import { PersonalinfoComponent } from './Personalinfo/Personalinfo.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'service',
    component:ServiceComponent,
    children:[
      {
        path:'ambulance',
        component:AmbulanceComponent,
      },
      {
        path:'scancenter',
        component:ScancenterComponent,
      },
      {
        path:'bloodbank',
        component:BloodbankComponent,
      },
      {
        path:'medicine',
        component:MedicineComponent
      },
      {
        path:'freecheckup',
        component:FreecheckupComponent
      }
    ]
  },
  {
    path:'doctor',
    component:DoctorsComponent,
  },
  {
    path:'department',
    component:DepartmentComponent,
    children:[
      {
        path:'lungs',
        component:LungsComponent,
      },
      {
        path:'eye',
        component:EyeComponent,
      },
      {
        path:'diabities',
        component:DiabitiesComponent,
      },
      {
        path:'dental',
        component:DentalComponent
      },
      {
        path:'heart',
        component:HeartComponent
      }
    ]
  },
  {
  path:'info',
  component:PersonalinfoComponent,
  canActivate:[AuthenticationGuard],
  children:[
    {
      path:'booking',
      component:BookingComponent,
    }
  ]
  },
  {
    path:'login',
    component:LoginComponent,
    canDeactivate:[DeactivateGuard]
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
