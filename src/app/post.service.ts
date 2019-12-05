import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
@Injectable()
export class PostService {
  private url="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:Http) { }

  getPosts()
  {
    
    let headers = new Headers();
    headers.append('Authorization', 'passing headers');
    let opts = new RequestOptions();
    opts.headers = headers;
    
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees",opts);
  }
  
  createPosts(post)
  {
   return  this.http.post("http://dummy.restapiexample.com/api/v1/create",JSON.stringify(post))
  }

  updatePosts(post)
  {
    return this.http.put(this.url +'/'+post.id,JSON.stringify(post))
  }

  deletePosts(id)
  {
    return this.http.delete(this.url+'/'+id)
  }

}
