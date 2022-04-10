import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts:any=[];

  constructor(public photoService:PostService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(){
    return this.photoService.getPosts().subscribe((data : {}) => {
      this.posts = data;
    })
  }

}
