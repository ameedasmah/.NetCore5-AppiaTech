import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { routes } from '../shared/app-route-module.module';
import { BookResource } from '../shared/book-service.model';
import { BookService } from '../shared/book-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-book-deatils',
  templateUrl: './book-deatils.component.html',
  styleUrls: ['./book-deatils.component.css']
})
export class BookDeatilsComponent implements OnInit {

  bookResource: BookResource[]
  constructor(private bookService: BookService,
    public route: ActivatedRoute,
    private router: Router) {
  }
  headers = ["Id", "title", "discraptions", "publisherId", 'newpublisher', 'bookAuthorResources', 'edit', 'Delete']
  ngOnInit(): void {
    this.bookService.loadBooks().subscribe(data => this.bookResource = data);
  }
  deleteBook(id: number) {
    console.log(id)
    this.bookService.deleteBook(id);
  }

  CreateNewBook() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
