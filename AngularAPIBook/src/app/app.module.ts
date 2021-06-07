import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RoutingModule } from 'angular-routing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BookDetailsFormComponent } from './book-details-form/book-details-form.component';
import { BookDeatilsComponent } from './book-deatils/book-deatils.component';
import { PublisherDetailsComponent } from './publisher-details/publisher-details.component';
import { PublisherFormComponent } from './publisher-form/publisher-form.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouteModuleModule } from './shared/app-route-module.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthorFormComponent } from './author-form/author-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, } from '@angular/material/input';
import { MatIconModule, } from "@angular/material/icon";
import { AutoSelectComponent } from './auto-select/auto-select.component'
import {MatSelectModule} from '@angular/material/select';
import { StoreModule } from '@ngrx/store';
import { reducers } from './Store/Store';




@NgModule({
  declarations: [
    AppComponent,
    BookDetailsFormComponent,
    BookDeatilsComponent,
    PublisherDetailsComponent,
    PublisherFormComponent,
    NavBarComponent,
    AuthorDetailsComponent,
    AuthorFormComponent,
    AutoSelectComponent,
    
  ],
  imports: [
BrowserModule,
    MatToolbarModule,
    RoutingModule,
    AppRouteModuleModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSelectModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
