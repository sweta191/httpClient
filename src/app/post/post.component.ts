import { Component, OnInit } from '@angular/core';

import { PostService } from '../post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: any[];
 
  constructor(private service:PostService) { 
}

  ngOnInit()
  {
    this.service.getPosts().
    subscribe(response =>{
      console.log((response).json());
      this.post=response.json();
    })

  }

  createPost( title: HTMLInputElement)
    {
      let post={title : title.value};
      title.value=" ";
      this.service.createPosts(post).subscribe(response =>{
        post['id']=response.json().id;
      
        this.post.splice(0,0,post);
        
        //console.log(response.json().id);
      })
    }

    update(post)
    {
      this.service.updatePosts(post).subscribe(response =>
        {
          console.log(response.json());
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
