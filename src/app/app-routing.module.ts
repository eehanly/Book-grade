import { BookDeleteComponent } from './components/book-delete/book-delete.component';
import { BookNewComponent } from './components/book-new/book-new.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: BookListComponent
  },
  {
    path: 'new',
    component: BookNewComponent
  },
  {
    path: 'delete/:id',
    component: BookDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
