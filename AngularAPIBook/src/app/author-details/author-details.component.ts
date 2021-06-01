import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorResourceModule } from './../shared/author-resource.module';
import { BookService } from './../shared/book-service.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  AuthorResource$: Observable<AuthorResourceModule[]>
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.AuthorResource$ = this.bookService.loadAuthors();

    this.AuthorResource$.subscribe(data => console.log(data))
  }

}
