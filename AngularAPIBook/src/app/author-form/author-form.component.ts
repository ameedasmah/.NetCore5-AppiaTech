import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../shared/book-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthorModel } from './../shared/Model/Author/Author.model';
import { addAuthor, updateAuthor } from '../Store/action/Author.action';
@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {
  id = 0;
  constructor(private bookService: BookService, public route: ActivatedRoute, public router: Router,private store:Store) {
    this.store.subscribe(data =>console.log(',,,,,,,',data))
   }
  myForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
  });
  onSubmit() {
    if (this.id) {
      this.bookService.updteAuthor(this.id, this.myForm.value).subscribe(data => console.log(data))
      // this.store.dispatch(updateAuthor({id,updateAuthor:this.myForm.value}))
      this.router.navigate(['/author'], { relativeTo: this.route });
    }
  
    this.store.dispatch(addAuthor({newAuthor: this.myForm.value as AuthorModel}));
    this.router.navigate(['/author'], { relativeTo: this.route });
  }
  ngOnInit(): void {
    console.log(',,,,', this.id)
    this.route.params.subscribe(params => {
      this.id = params['id']
      console.log('hii', this.id)
    })
  }
}

