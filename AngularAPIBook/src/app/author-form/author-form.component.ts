import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../shared/book-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})

export class AuthorFormComponent implements OnInit {
  id = 0;
myForm = new FormGroup({
  fullName:new FormControl(''),
  email:new FormControl(''),
  age:new FormControl(''),
});
  constructor(private bookService :BookService ,public route:ActivatedRoute) { }
  
  onSubmit(){
    if(this.id==0){
      this.bookService.AddAuthor(this.myForm.value).subscribe(data=>console.log('data',data))
    }
    else{
      this.bookService.updteAuthor(this.id,this.myForm.value).subscribe(data=>console.log(data))
    }
  }
  ngOnInit(): void {
    this.route.params.subscribe(params=>
      {
        this.id= params['id']
       console.log('hii',this.id)
       } )
      }
  }


