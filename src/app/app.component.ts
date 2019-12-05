import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  template: `
       <app-post></app-post>
            `
})
export class AppComponent {

  constructor(){}
  //title = 'reactive-form';
  // get Id()
  // {
  //   return this.registrationForm.get('Id');
  // }

  // get Emp_name()
  // {
  //   return this.registrationForm.get('emp_name');
  // }

  // get Emp_salary()
  // {
  //   return this.registrationForm.get('emp_salary');
  // }

  // get Emp_age()
  // {
  //   return this.registrationForm.get('emp_age');
  // }

  // registrationForm = this.fb.group({
  //   Id:[,[Validators.required,Validators.minLength(3)]],
  //   emp_name:['',[Validators.required]],
  //   emp_salary:['',[Validators.required,]],
  //   emp_age:['',[Validators.required,]],


  // });
  

  // loadapi()
  // {
  //   console.log("I am clicked");
  //   this.registrationForm.setValue({
  //     userName:'sweta',
  //     password:'hkfhkd',
  //     confirmPassword:'mbnkdnv',
  //     address: {
  //       city:'kolkata',
  //       state:'West Bengal',
  //       postalCode:'700091'
  //     }
        
  //   });
  // }

  // login()
  // {
  //   console.log(this.registrationForm.value);
  //   if(this.registrationForm.valid)
  //   {
  //     //this.registrationForm.reset();
  //     console.log("form has been submitted");
  //   }
  //   else
  //   {
  //     this.registrationForm.setErrors({invalid:true});
  //     console.log("fill the details first");
  //   }
  // }
    
  
    
  
  
}