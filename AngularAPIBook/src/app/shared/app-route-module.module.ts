import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookDeatilsComponent } from './../book-deatils/book-deatils.component';
import { PublisherDetailsComponent } from './../publisher-details/publisher-details.component';
import { AuthorDetailsComponent } from './../author-details/author-details.component';


const routes: Routes = [
  {
    path: "book",
    component: BookDeatilsComponent,
  },
  {
    path: "publisher",
    component: PublisherDetailsComponent,
  },
  {
    path: "author",
    component: AuthorDetailsComponent,
  },
]


@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

})
export class AppRouteModuleModule { }
