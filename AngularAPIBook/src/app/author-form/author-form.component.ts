import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../shared/book-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthorModel } from './../shared/Model/Author/Author.model';
import { addAuthor, loadAuthors, updateAuthor } from '../Store/action/Author.action';
import { map } from 'rxjs/operators';
import { State } from './../Store/Store';
@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {
  id = 0;
  oldAuthor: any;
  submited=false;
  constructor(private bookService: BookService, public route: ActivatedRoute, public router: Router, private store: Store<State>) {
  }
  myForm: FormGroup;
  onSubmit() {
    if (this.id && this.myForm.valid) {
      this.store.dispatch(updateAuthor({ id: this.id, updateAuthor: this.myForm.value }))
      this.router.navigate(['/author'], { relativeTo: this.route });

    }
    if(!this.id && this.myForm.valid) {
      this.store.dispatch(addAuthor({ newAuthor: this.myForm.value as AuthorModel }));
      this.router.navigate(['/author'], { relativeTo: this.route });
    }
    else{
      this.myForm.reset();
    }
  }
  ngOnInit(): void {
    console.log('ngonInit',this.submited)
    this.myForm = new FormGroup({
      fullName: new FormControl('',[ Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.min(1), Validators.max(120)]),
    });
    console.log(',,,,', this.id)
    this.route.params.subscribe(params => {
      this.id = params['id']
      if (this.id) {
        this.loadAuthor(this.id)
      }
    })
  }


  private loadAuthor(id: number) {
    this.store.subscribe(data => {
      let item =data.Author.Authors.find(e=>e.id == id)
      this.oldAuthor = item
      this.myForm.controls['fullName']?.patchValue(this.oldAuthor?.fullName);
        this.myForm.controls['email']?.patchValue(this.oldAuthor?.email);
        this.myForm.controls['age']?.patchValue(this.oldAuthor?.age);
    })

  }
}

