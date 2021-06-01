import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RoutingModule } from 'angular-routing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BookDetailsFormComponent } from './book-details-form/book-details-form.component';
import { BookDeatilsComponent } from './book-deatils/book-deatils.component';
import { PublisherDetailsComponent } from './publisher-details/publisher-details.component';
import { PublisherFormComponent } from './publisher-form/publisher-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouteModuleModule } from './shared/app-route-module.module';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsFormComponent,
    BookDeatilsComponent,
    PublisherDetailsComponent,
    PublisherFormComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    RoutingModule,
    AppRouteModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
