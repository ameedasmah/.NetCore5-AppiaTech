import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from '../shared/app-route-module.module';
import { AuthorResourceModule } from './../shared/author-resource.module';
import { BookService } from './../shared/book-service.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
  AuthorResource: AuthorResourceModule[]
  constructor(private bookService: BookService,
    public route:ActivatedRoute,
    private router: Router) {
     }
  headers = ["id", "fullName", "email", "age", "books","Delete"];

  ngOnInit(): void {
    this.bookService.loadAuthors().subscribe(data => {
      console.log(data)
      return this.AuthorResource = data;
    });
  }
  createNewAuthor(){
    this.router.navigate(['create'],{relativeTo:this.route});
  }
  deleteAuthor(id:number){
    console.log(id);
    this.bookService.deleteAuthor(id);
  }
  
}
