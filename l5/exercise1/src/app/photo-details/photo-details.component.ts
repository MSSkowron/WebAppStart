import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {
  photo:any=[];

  constructor(private route: ActivatedRoute,
    private photoService: PhotoService,
    private location: Location) { }

  ngOnInit(): void {
    this.getPhoto();
  }

  getPhoto(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.photoService.getPhoto(id).subscribe((data : {}) => {
      this.photo = data;
    })
  }
  
  goBack(){
    this.location.back();
  }
}
