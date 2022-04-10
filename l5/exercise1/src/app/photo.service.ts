import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo';
import {Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService{
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com/photos'

  constructor(private http:HttpClient) { }

  getPhotos(): Observable<Photo> {
    return this.http.get<Photo>(this.ROOT_URL)
    .pipe(
      retry(3)
    )
  }

  getPhoto(id:any): Observable<Photo> {
    return this.http.get<Photo>(this.ROOT_URL+'/'+id)
    .pipe(
      retry(3)
    )
  }

}
