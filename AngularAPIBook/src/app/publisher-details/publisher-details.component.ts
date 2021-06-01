import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PublisherResourceModule } from './../shared/publisher-resource.module';
import { BookService } from './../shared/book-service.service';

@Component({
  selector: 'app-publisher-details',
  templateUrl: './publisher-details.component.html',
  styleUrls: ['./publisher-details.component.css']
})
export class PublisherDetailsComponent implements OnInit {

  PublisherResource: PublisherResourceModule[]
  constructor(private bookService: BookService) { }
  headers = ["id", "name", "books"]
  ngOnInit(): void {
    this.bookService.loadPublisher()
      .subscribe(data => {
        this.PublisherResource = data;
      });
  }

}
