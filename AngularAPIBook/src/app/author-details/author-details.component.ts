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
  count:number=0;
  headers = ["id", "fullName", "email", "age", "books","Edit","Delete"];


  constructor(private bookService: BookService,
    public route:ActivatedRoute,
    private router: Router,
    private store:Store<any>
   )
   {
   this.store.subscribe(data=>{this.AuthorResource = data.Author.Authors ;  console.log('this.AuthorResource',data)})
     }

  ngOnInit(): void {
    this.store.dispatch(loadAuthors())
    // this.getData();
  }
  createNewAuthor(){
    this.router.navigate(['create'],{relativeTo:this.route});
  }
  deleteAuthor(id:number){
    // this.bookService.deleteAuthor(id).subscribe(()=>this.getData())
    this.store.dispatch(DeleteAuthor({id}))
  }
// getData(){
//   this.bookService.loadAuthors().subscribe(data => {
//     console.log(data)
//     return this.AuthorResource = data;
//   });
// }
  Edit(id:number){
    console.log(id)
    this.router.navigate(['create/'+id],{relativeTo:this.route})
  }
  
  increament(){
    this.store.dispatch(increment({number:2}))
  }

  decreament(){
    // this.store.dispatch(new DecreamentAction(1))
  }
}
