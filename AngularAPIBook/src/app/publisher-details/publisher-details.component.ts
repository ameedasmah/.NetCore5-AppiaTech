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

  PublisherResource$: Observable<PublisherResourceModule[]>
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.PublisherResource$ = this.bookService.loadPublisher();
    this.PublisherResource$.subscribe(data => console.log(data));
  }

}
