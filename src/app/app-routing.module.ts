import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from './book/book.component';
import {AppComponent} from './app.component';
import {BooklistComponent} from './booklist/booklist.component';

const routes: Routes = [
  {path: 'home', component: BookComponent},
  {path: 'trangchu', component: AppComponent },
  {path: 'books', component: BooklistComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
