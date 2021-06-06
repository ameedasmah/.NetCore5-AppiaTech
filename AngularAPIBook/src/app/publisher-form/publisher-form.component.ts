import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookService } from './../shared/book-service.service';
import { routes } from './../shared/app-route-module.module';
import { ActivatedRoute, Router } from '@angular/router';
import { PublisherResourceModule } from './../shared/publisher-resource.module';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-publisher-form',
  templateUrl: './publisher-form.component.html',
  styleUrls: ['./publisher-form.component.css']
})
export class PublisherFormComponent implements OnInit {
  @Output('onePublisher') 
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
      console.log('this.id', this.id)
    })
   this.bookService.loadOnePublisher(this.id).subscribe((data:any)=>{
     this.onePublisher = data
     this.myForm.controls['name']?.setValue(this.onePublisher?.name);
     this.myForm.controls['email']?.setValue(this.onePublisher?.email);
     this.myForm.controls['dateOfBirth']?.setValue(this.onePublisher?.dateOfBirth);
     this.myForm.controls['salery']?.setValue(this.onePublisher?.salery);
    });
    
  
  }
  id = 0;
  onePublisher:any;
  constructor(private bookService: BookService, public route: ActivatedRoute, private router: Router) { }
  myForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    dateOfBirth: new FormControl(''),
    salery: new FormControl(''),
  })
  onSubmit() {
    if (this.id) {
      this.bookService.PutPublisher(this.id, this.myForm.value).subscribe(data => console.log(data))
      console.log('udpated')
      this.router.navigate(['/publisher'], { relativeTo: this.route });
    }
    this.bookService.addPublisher(this.myForm.value).subscribe(data => console.log(data))
    console.log('Post')
    this.router.navigate(['/publisher'], { relativeTo: this.route });
  }
}
