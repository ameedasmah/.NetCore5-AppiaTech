import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../shared/book-service.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {
myForm = new FormGroup({
  fullName:new FormControl(''),
  email:new FormControl(''),
  age:new FormControl(''),
});
  constructor(private bookService :BookService) { }
  
  onSubmit(){
    this.bookService.AddAuthor(this.myForm.value).subscribe(data=>console.log('data',data))
    
  }
  ngOnInit(): void {
    
  }

}
