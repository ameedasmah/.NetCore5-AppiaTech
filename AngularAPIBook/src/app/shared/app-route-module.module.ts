import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookDeatilsComponent } from './../book-deatils/book-deatils.component';
import { PublisherDetailsComponent } from './../publisher-details/publisher-details.component';
import { AuthorDetailsComponent } from './../author-details/author-details.component';
import { AuthorFormComponent } from './../author-form/author-form.component';
import {PublisherFormComponent} from './../publisher-form/publisher-form.component';
import { BookDetailsFormComponent } from '../book-details-form/book-details-form.component';




export const routes: Routes = [
  {
    path: "book",
    component: BookDeatilsComponent,
  },
  {
    path: "book",
    children:[
     { 
       path:"create",
      component:BookDetailsFormComponent
    }
    ]
  },
  {
    path: "publisher",
    component: PublisherDetailsComponent,
  },
  {
    path: "publisher",
    children:[
      {
        path: "create",
        component: PublisherFormComponent,
      },
      {
        path: "create/:id",
        component: PublisherFormComponent,
      },
    ]
  },
  {
    path: "author",
    component: AuthorDetailsComponent,
  },
  {
    path: "author",
    children: [{ path: 'create', component: AuthorFormComponent }],
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
