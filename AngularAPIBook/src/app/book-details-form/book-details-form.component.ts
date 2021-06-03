import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from './../shared/book-service.service';

@Component({
  selector: 'app-book-details-form',
  templateUrl: './book-details-form.component.html',
  styleUrls: ['./book-details-form.component.css']
})
export class BookDetailsFormComponent implements OnInit {
  myForm= new FormGroup({
    title:new FormControl(''),
    discraptions:new FormControl(''),
    publisherId:new FormControl(''),
  })

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.bookService.postBook(this.myForm.value).subscribe(data=>console.log('a',data))
  }
}
