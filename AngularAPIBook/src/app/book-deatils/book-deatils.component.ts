import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookResource } from '../shared/book-service.model';

@Component({
  selector: 'app-book-deatils',
  templateUrl: './book-deatils.component.html',
  styleUrls: ['./book-deatils.component.css']
})
export class BookDeatilsComponent implements OnInit {

  bookResource = BookResource
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/books').subscribe(data => console.log('Book', data))
  }

}
