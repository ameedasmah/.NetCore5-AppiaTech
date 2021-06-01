import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book-service.service';

@Component({
  selector: 'app-book-details-form',
  templateUrl: './book-details-form.component.html',
  styleUrls: ['./book-details-form.component.css']
})
export class BookDetailsFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
