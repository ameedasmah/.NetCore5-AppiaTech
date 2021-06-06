import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from './../shared/book-service.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-details-form',
  templateUrl: './book-details-form.component.html',
  styleUrls: ['./book-details-form.component.css']
})
export class BookDetailsFormComponent implements OnInit {
  myForm: FormGroup;
  authorIds: number[] = [];
  authorList: any[]= [];
  constructor(private bookService:BookService, private route:ActivatedRoute, private router:Router) { }
  ngOnInit(): void {
    this.myForm= new FormGroup(({
      title:new FormControl(''),
      discraptions:new FormControl(''),
      publisherId:new FormControl(''),
      authors: new FormControl([])
    }))
    this.bookService.loadAuthors().subscribe((data:any)=>data.forEach((item:any)=> {
      this.authorList.push(item);
    }));
  }
  onSubmit(){
    this.bookService.postBook(this.myForm.value).subscribe(data=>console.log('a',data))
    this.router.navigate(['/book'],{relativeTo:this.route});
  }
}
