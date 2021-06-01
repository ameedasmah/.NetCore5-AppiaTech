import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookResource } from '../shared/book-service.model';
import { BookService } from '../shared/book-service.service';
@Component({
  selector: 'app-book-deatils',
  templateUrl: './book-deatils.component.html',
  styleUrls: ['./book-deatils.component.css']
})
export class BookDeatilsComponent implements OnInit {

  bookResource$: Observable<BookResource[]>
  constructor(private bookService: BookService) {

  }
  headers = ["Id", "title", "discraptions", "publisherId", 'newpublisher']
  ngOnInit(): void {
    console.log('hi', this.bookService)

    this.bookResource$ = this.bookService.loadBooks();
    this.bookResource$.subscribe(data => console.log(data))
  }
}
