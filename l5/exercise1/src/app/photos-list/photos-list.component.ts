import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos:any=[];

  constructor(public photoService:PhotoService) { }

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos(){
    return this.photoService.getPhotos().subscribe((data : {}) => {
      this.photos = data;
    })
  }

}
