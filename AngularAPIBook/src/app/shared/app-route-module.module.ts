import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookDeatilsComponent } from './../book-deatils/book-deatils.component';
import { PublisherDetailsComponent } from './../publisher-details/publisher-details.component';
import { AuthorDetailsComponent } from './../author-details/author-details.component';
import { AuthorFormComponent } from './../author-form/author-form.component';




export const routes: Routes = [
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
  {
    path: "author",
    children: [{ path: 'create', component: AuthorFormComponent }
    ],
  },

]


@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule,],

})
export class AppRouteModuleModule { }
