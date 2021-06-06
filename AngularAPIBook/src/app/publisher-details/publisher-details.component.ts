import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PublisherResourceModule } from './../shared/publisher-resource.module';
import { BookService } from './../shared/book-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-publisher-details',
  templateUrl: './publisher-details.component.html',
  styleUrls: ['./publisher-details.component.css']
})
export class PublisherDetailsComponent implements OnInit {

  PublisherResource: PublisherResourceModule[]
  constructor(private bookService: BookService, public route: ActivatedRoute, private router: Router) { }
  headers = ["id", "name", "books", "Delete", "Edit"];
  loadnePublisher:any;
  id: number;
  data: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
  
      this.getData();
  }


  createNewPublisher() {
    this.router.navigate(['editcreate'], { relativeTo: this.route });
  }

  deletePublisher(id: number) {
   return this.bookService.deletePublisher(id).subscribe(()=>this.getData());
  }
  edit(id:number){
    console.log(id)
this.bookService.loadOnePublisher(id).subscribe(data=>console.log('DATAAAAA',data))
    this.router.navigate(['editcreate/'+id],{relativeTo:this.route})
  }
getData(){
  this.bookService.loadPublisher()
      .subscribe(data => {
        this.PublisherResource = data;
      });
}
}
