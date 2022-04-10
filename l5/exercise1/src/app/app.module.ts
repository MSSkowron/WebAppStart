import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { HomeComponent } from './home/home.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PhotosListComponent,
    HomeComponent,
    PhotoDetailsComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
