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
  constructor(private bookService: BookService,public route:ActivatedRoute,private router:Router) { }
  headers = ["id", "name", "books"]
  ngOnInit(): void {
    this.bookService.loadPublisher()
      .subscribe(data => {
        this.PublisherResource = data;
      });
    }
    createNewPublisher(){
this.router.navigate(['create'],{relativeTo:this.route});
    }

}
