import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  post: any[];
  url="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:Http) { 
    http.get(this.url).
    subscribe(response =>{
      console.log((response).json());
      this.post=response.json();
    })

    

  }

  createPost( title: HTMLInputElement)
    {
      let post={title : title.value};
      title.value=" ";
      this.http.post(this.url,JSON.stringify(post)).subscribe(response =>{
        post['id']=response.json().id;
      
        this.post.splice(0,0,post);
        
        //console.log(response.json().id);
      })
    }

    update(post)
    {
      this.http.put(this.url +'/'+post.id,JSON.stringify(post)).subscribe(response =>
        {
          console.log(response.json());
        });
    }
    
    deletePost(post)
    {
      this.http.delete(this.url+'/'+post.id)
      .subscribe(response =>{
        let index=this.post.indexOf(post);
        this.post.splice(index,1);
      });
    }

  
}
