import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  @Input() postDetails = {id:'',userId:'',title:'',body:''}


  constructor(public postService:PostService,public router:Router,private location: Location) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.addPost();
  }
  addPost() {
    this.postDetails.id = String(this.postDetails.id);
    this.postDetails.userId = String(this.postDetails.id);
    this.postService.createPost(this.postDetails).subscribe(() => {
      this.router.navigate(['/posts-list'])
    })
  }
  goBack(){
    this.location.back();
  }
}
