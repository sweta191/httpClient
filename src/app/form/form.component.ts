import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { PostService } from '../post.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb:FormBuilder,private service:PostService,private router:Router){}
  get Id()
  {
    return this.registrationForm.get('id');
  }

  get Emp_name()
  {
    return this.registrationForm.get('name');
  }

  get Emp_salary()
  {
    return this.registrationForm.get('salary');
  }

  get Emp_age()
  {
    return this.registrationForm.get('age');
  }

  registrationForm = this.fb.group({
    id:[,[Validators.required,Validators.minLength(3)]],
    name:['',[Validators.required]],
    salary:['',[Validators.required,]],
    age:['',[Validators.required,]],


  });
  post: any[];
  ngOnInit()
  {
    this.service.getPosts().
    subscribe(response =>{
      console.log((response).json());
      this.post=response.json();
    })

  }


  createPost()
    {
      
      let new_emp=this.registrationForm.value;

      console.log("data of employee",new_emp.id);
       this.service.createPosts(new_emp).subscribe(response =>{

         console.log("success",response);
         this.post.splice(0,0,new_emp);
         console.log("added new",this.post); 

        })


    }

  login()
  {
    console.log(this.registrationForm.value.Id);
    if(this.registrationForm.valid)
    {
      //this.registrationForm.reset();
      console.log("form has been submitted");
      this.createPost();
      this.router.navigate(['/create']);
    }
    else
    {
      this.registrationForm.setErrors({invalid:true});
      console.log("fill the details first");
    }
  }

  

  
}
