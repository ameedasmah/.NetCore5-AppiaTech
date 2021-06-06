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
  headers = ["id", "fullName", "email", "age", "books","Edit","Delete"];
  ngOnInit(): void {
    this.getData();
  }
  createNewAuthor(){
    this.router.navigate(['editcreate'],{relativeTo:this.route});
  }
  deleteAuthor(id:number){
    this.bookService.deleteAuthor(id).subscribe(()=>this.getData())
  }
getData(){
  this.bookService.loadAuthors().subscribe(data => {
    console.log(data)
    return this.AuthorResource = data;
  });
}
  Edit(id:number){
    console.log(id)
    this.router.navigate(['editcreate/'+id],{relativeTo:this.route})

  }
  
}
