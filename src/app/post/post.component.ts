import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { PostService } from '../post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: any[];
  
 
  constructor(private service:PostService,private fb:FormBuilder,private router:Router) { 
}


  
    
ngOnInit()
  {
    this.service.getPosts().
    subscribe(response =>{
      console.log((response).json());
      this.post=response.json();
    })

  }

  

    update(post)
    {
      this.service.updatePosts(post).subscribe(response =>
        {
          console.log("that is post one",post);
          post.id=888;
          console.log("updated data",response.json());
          
        });
    }
    
    deletePost(post)
    {
      this.service.deletePosts(post.id)
      .subscribe(response =>{
        let index=this.post.indexOf(post);
        this.post.splice(index,1);
      });
    }

    
  
}
