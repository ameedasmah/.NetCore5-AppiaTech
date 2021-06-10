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
  id:number;
  oneAuthor:any
  myForm: FormGroup;
  authorIds: number[] = [];
  authorList: any[]= [];
  publisherId:number[]=[];
  publisherName:string[]=[];
  PublisherList:any[]=[];
  constructor(private bookService:BookService, private route:ActivatedRoute, private router:Router) { }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.myForm= new FormGroup(({
      title:new FormControl(''),
      discraptions:new FormControl(''),
      publisherId:new FormControl(''),
      authors: new FormControl([]),
      Publisher: new FormControl([]),
    }))
    this.bookService.loadAuthors().subscribe((data:any)=>data.forEach((item:any)=> {
      this.authorList.push(item);
    }));
    this.bookService.loadPublisher().subscribe((data:any)=>data.forEach((item:any) => {
      this.PublisherList.push(item);
    }));
    this.loadBook()
  }
  onSubmit(){
    this.bookService.postBook(this.myForm.value).subscribe(data=>console.log('a',data))
    this.router.navigate(['/book'],{relativeTo:this.route});

  }


  private loadBook(){
    this.bookService.lodOneBook(this.id).subscribe((data:any)=>{
      this.oneAuthor = data
      console.log(this.oneAuthor)
      this.myForm.controls['title']?.patchValue(this.oneAuthor?.title);
      this.myForm.controls['discraptions']?.patchValue(this.oneAuthor?.discraptions);
      this.myForm.controls['publisherId']?.patchValue(this.oneAuthor?.publisherId);
      this.myForm.controls['authors']?.patchValue(this.oneAuthor?.authors);
      this.myForm.controls['Publisher']?.patchValue(this.oneAuthor?.Publisher);
     });
  }
}
