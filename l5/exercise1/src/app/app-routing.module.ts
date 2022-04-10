import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'posts-list', component: PostsListComponent },
  { path: 'photos-list', component: PhotosListComponent },
  { path: 'photo-details/:id', component: PhotoDetailsComponent },
  //page not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
