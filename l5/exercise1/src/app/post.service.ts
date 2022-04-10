import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService{
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http:HttpClient) { }

  getPosts(): Observable<Post> {
    return this.http.get<Post>(this.ROOT_URL)
    .pipe(
      retry(3)
    )
  }

  createPost(post:any): Observable<Post> {
    console.log(post);
    return this.http.post<Post>(this.ROOT_URL, JSON.stringify(post))
    .pipe(
      retry(3)
    )
  }  

}
