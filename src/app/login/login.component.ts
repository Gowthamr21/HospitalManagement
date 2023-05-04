import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { IDeactivateComponent } from '../deactivate.guard';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-reactivelogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements IDeactivateComponent {
  username:any;
  password:any="";
  retUrl:any="home";


  reactiveloginForm=new FormGroup({
    username:new FormControl(""),
    password:new FormControl(),
    cpassword:new FormControl()
  });

  constructor(private fb:FormBuilder,private http:HttpClient,private service:LoginserviceService,private route:ActivatedRoute,private router:Router) {

   }

   reactiveloginForm1=this.fb.group({
    username:[,[Validators.required,Validators.minLength(8)]], //[phaceholder,[validatuon]]
    password:[,[Validators.required,Validators.minLength(8)]],
   })


   login(){
    this.http.get<any>("http://localhost:3000/users").subscribe(res=>{
      const username=res.find((result:any)=>{
        return result.username === this.reactiveloginForm1.value.username
        && result.password === this.reactiveloginForm1.value.password
      });
      if(username){
        alert("login success");
        this.reactiveloginForm1.reset();
        this.router.navigate(['home']);
      }
      else{
        alert ("user not found")
      }
    });
   }

   canExit () : boolean{
    if(confirm("you are about to leave your page. press 'yes' to continue")){
      return true;
    }
    else{
      return false;
    }
  }

  onLogin(){

    this.service.userLoggedIn(this.username,this.password).subscribe((data)=>{
      console.log("return to"+this.retUrl);
      if(this.retUrl!=null){
        this.router.navigate([this.retUrl]);
      }
    })

  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(parama=>{
      this.retUrl=parama.get('retUrl');
      console.log("LoginComponent/ngOnInit",this.retUrl);
    })
  }

}
