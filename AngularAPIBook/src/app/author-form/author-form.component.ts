import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
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
  oldAuthor: any
  constructor(private bookService: BookService, public route: ActivatedRoute, public router: Router, private store: Store) {
    this.store.subscribe(data => console.log(',,,,,,,', data))
  }
  myForm: FormGroup;
  onSubmit() {
    if (this.id && this.myForm.valid) {
      this.store.dispatch(updateAuthor({ id: this.id, updateAuthor: this.myForm.value }))
      this.router.navigate(['/author'], { relativeTo: this.route });
    }
    if(this.myForm.valid) {
      this.store.dispatch(addAuthor({ newAuthor: this.myForm.value as AuthorModel }));
      this.router.navigate(['/author'], { relativeTo: this.route });
    }
    else{
      this.myForm.reset();
    }
  }
  ngOnInit(): void {
    this.myForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', [Validators.min(1), Validators.max(120)]),
    });
    console.log(',,,,', this.id)
    this.route.params.subscribe(params => {
      this.id = params['id']
      if (this.id) {
        this.loadAuthors()
      }
    })
  }
  private loadAuthors() {
    this.bookService.loadOneAuthor(this.id).subscribe((data: any) => {
      this.oldAuthor = data
      console.log('object', data)
      this.myForm.controls['fullName']?.patchValue(this.oldAuthor?.fullName);
      this.myForm.controls['email']?.patchValue(this.oldAuthor?.email);
      this.myForm.controls['age']?.patchValue(this.oldAuthor?.age);
    })
  }
  get name() {
    return this.myForm.get('name');
  }
  get email() {
    return this.myForm.get('email');
  }
  get age() {
    return this.myForm.get('age');
  }
}

