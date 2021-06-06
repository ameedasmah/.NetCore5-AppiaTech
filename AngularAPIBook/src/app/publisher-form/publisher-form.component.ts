import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookService } from './../shared/book-service.service';
import { routes } from './../shared/app-route-module.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-publisher-form',
  templateUrl: './publisher-form.component.html',
  styleUrls: ['./publisher-form.component.css']
})
export class PublisherFormComponent implements OnInit {
   id=0;
  constructor(private bookService:BookService ,public route: ActivatedRoute, private router: Router) { }
  myForm= new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    dateOfBirth:new FormControl(''),
    salery:new FormControl(''),
  })
  onSubmit(){
    if(this.id){
      this.bookService.PutPublisher(this.id,this.myForm.value).subscribe(data=>console.log(data))
      this.router.navigate(['/publisher'],{relativeTo:this.route});
      }
      this.bookService.addPublisher(this.myForm.value).subscribe(data=>console.log(data))
      this.router.navigate(['/publisher'],{relativeTo:this.route});
  }
  ngOnInit(): void {
     this.route.params.subscribe(params=>{
      this.id=params['id']
      console.log('this.id',this.id)
    })
  }

}
