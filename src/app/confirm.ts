import { FormGroup } from "@angular/forms";

export function ConfirmedValidator(controlName:string,
  matchingControlName:string)

  {
    return(formgroup:FormGroup)=>{
      const password=formgroup.controls[controlName];
      const cpassword=formgroup.controls[matchingControlName];
      if(password.value!==cpassword.value){
        cpassword.setErrors({ConfirmedValidator:true})
      }
      else{
        cpassword.setErrors(null);
      }
    }
  }
