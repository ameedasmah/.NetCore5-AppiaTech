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
    this.bookService.AddPublisher(this.myForm.value).subscribe(data=>console.log('data',data))
    
  }
  ngOnInit(): void {
    
  }

}



// postAuthors():Observable<AuthorResourceModule>{
//   this.http.post('https://localhost:5001/api/authours',{
//    FullName:this.FullName,
//    email:this.email,
//    age:this.age
//  }).toPromise().then((data:any)=>console.log(data))
//    }