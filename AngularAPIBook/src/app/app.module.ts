import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookDetailsFormComponent } from './book-details-form/book-details-form.component';
import { BookDeatilsComponent } from './book-deatils/book-deatils.component';
import { PublisherDetailsComponent } from './publisher-details/publisher-details.component';
import { PublisherFormComponent } from './publisher-form/publisher-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsFormComponent,
    BookDeatilsComponent,
    PublisherDetailsComponent,
    PublisherFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
