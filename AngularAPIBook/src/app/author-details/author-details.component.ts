import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { routes } from '../shared/app-route-module.module';
import { BookService } from './../shared/book-service.service';
import { Store } from '@ngrx/store';
import { increment, loadAuthors } from '../Store/action/Author.action';
import { AuthorResource } from '../shared/Author/author-resource/author-resource';
import { DeleteAuthor } from './../Store/action/Author.action';
import { MatDialog } from '@angular/material/dialog';
import { DialogPublisherComponent } from '../dialog-publisher/dialog-publisher.component';
import { DialogRemoveComponent } from './../dialog-remove/dialog-remove.component';


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
    private store: Store<any>,
    public dialog:MatDialog
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
    this.router.navigate(['edit/' + id], { relativeTo: this.route })
  }

  ngOnInit(): void {
    if(this.AuthorResource.length===0){
      this.store.dispatch(loadAuthors()) //only if the data doesn't exist on the store
    }
  }
  openDialog(id: number){
   let dialogRef= this.dialog.open(DialogRemoveComponent,{
     data:{
       id: id
     }
    })
   dialogRef.afterClosed().subscribe((result)=>{
     console.log(`Dialog result: ${result}`)
   })
  }
}
