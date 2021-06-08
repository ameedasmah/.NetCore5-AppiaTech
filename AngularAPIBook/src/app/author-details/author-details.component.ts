import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from '../shared/app-route-module.module';
import { BookService } from './../shared/book-service.service';
import { Store } from '@ngrx/store';
import { increment, loadAuthors } from '../Store/action/Author.action';
import { AuthorResource } from '../shared/Author/author-resource/author-resource';
import { DeleteAuthor } from './../Store/action/Author.action';



@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  AuthorResource: AuthorResource[]
  headers = ["id", "fullName", "email", "age", "books", "Edit", "Delete"];
  constructor(private bookService: BookService,
    public route: ActivatedRoute,
    private router: Router,
    private store: Store<any>
  ) {
    this.store.subscribe(data => { this.AuthorResource = data.Author.Authors ;console.log('this.AuthorResource', this.AuthorResource) })
  }

  createNewAuthor() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
  deleteAuthor(id: number) {
    this.store.dispatch(DeleteAuthor({ id }))
  }
  Edit(id: number) {
    console.log(id)
    this.router.navigate(['create/' + id], { relativeTo: this.route })
  }

  ngOnInit(): void {
    this.store.dispatch(loadAuthors())
  }
}
