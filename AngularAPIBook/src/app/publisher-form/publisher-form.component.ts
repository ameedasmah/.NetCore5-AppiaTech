import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookService } from './../shared/book-service.service';

@Component({
  selector: 'app-publisher-form',
  templateUrl: './publisher-form.component.html',
  styleUrls: ['./publisher-form.component.css']
})
export class PublisherFormComponent implements OnInit {

constructor(private bookService:BookService) { }

myForm= new FormGroup({
  name:new FormControl(''),
  email:new FormControl(''),
  dateOfBirth:new FormControl(''),
  salery:new FormControl(''),
})
onSubmit(){
  this.bookService.addPublisher(this.myForm.value).subscribe(data=>console.log(data))
}
  ngOnInit(): void {
  }

}
