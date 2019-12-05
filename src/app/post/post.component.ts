import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: any[];
 
  constructor(private service:PostService,private fb:FormBuilder) { 
}

get Id()
  {
    return this.registrationForm.get('Id');
  }

  get Emp_name()
  {
    return this.registrationForm.get('emp_name');
  }

  get Emp_salary()
  {
    return this.registrationForm.get('emp_salary');
  }

  get Emp_age()
  {
    return this.registrationForm.get('emp_age');
  }

  registrationForm = this.fb.group({
    Id:[,[Validators.required,Validators.minLength(3)]],
    emp_name:['',[Validators.required]],
    emp_salary:['',[Validators.required,]],
    emp_age:['',[Validators.required,]],


  });
  

  loadapi()
  {
    console.log("I am clicked");
    this.registrationForm.setValue({
      userName:'sweta',
      password:'hkfhkd',
      confirmPassword:'mbnkdnv',
      address: {
        city:'kolkata',
        state:'West Bengal',
        postalCode:'700091'
      }
        
    });
  }

  login()
  {
    console.log(this.registrationForm.value.Id);
    if(this.registrationForm.valid)
    {
      //this.registrationForm.reset();
      console.log("form has been submitted");
    }
    else
    {
      this.registrationForm.setErrors({invalid:true});
      console.log("fill the details first");
    }
  }
    
  
    

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

      console.log(new_emp);
       this.service.createPosts(new_emp).subscribe(response =>{

         console.log("success",response);
         this.post.splice(0,0,new_emp);
        })
    }

  //   update(post)
  //   {
  //     this.service.updatePosts(post).subscribe(response =>
  //       {
  //         console.log(response.json());
  //       });
  //   }
    
  //   deletePost(post)
  //   {
  //     this.service.deletePosts(post.id)
  //     .subscribe(response =>{
  //       let index=this.post.indexOf(post);
  //       this.post.splice(index,1);
  //     });
  //   }

    
  
}
