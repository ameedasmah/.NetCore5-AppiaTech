import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  id = 0;
  onePublisher:any;
  constructor(private bookService: BookService, public route: ActivatedRoute, private router: Router) { }
  myForm :FormGroup;
  onSubmit() {
    if (this.id && this.myForm.valid) {
      this.bookService.PutPublisher(this.id, this.myForm.value).subscribe(() => {
        this.router.navigate(['/publisher'], { relativeTo: this.route });
      })
      
    } 
    if(this.myForm.valid) {
      this.bookService.addPublisher(this.myForm.value).subscribe(() => 
        this.router.navigate(['/publisher'], { relativeTo: this.route }))
    }
    else{
      this.myForm.reset();
    }
  }
  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required, Validators.email]),
      dateOfBirth: new FormControl('',Validators.required),
      salery: new FormControl('',[Validators.min(2000), Validators.max(5000)]),
    })
    this.route.params.subscribe(params => {
      this.id = params['id']
      if (this.id) {
        this.loadPublisher()
      }
      
    })
  }

  private loadPublisher(){
    this.bookService.loadOnePublisher(this.id).subscribe((data:any)=>{
      this.onePublisher = data
      this.myForm.controls['name']?.patchValue(this.onePublisher?.name);
      this.myForm.controls['email']?.patchValue(this.onePublisher?.email);
      this.myForm.controls['dateOfBirth']?.patchValue(this.onePublisher?.dateOfBirth);
      this.myForm.controls['salery']?.patchValue(this.onePublisher?.salery);
     });
  }
}
