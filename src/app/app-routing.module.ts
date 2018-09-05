import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'posts', component: PostsComponent },
  { path : '', component : UserListComponent },
  { path : '**', component : UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserListComponent, PostsComponent];