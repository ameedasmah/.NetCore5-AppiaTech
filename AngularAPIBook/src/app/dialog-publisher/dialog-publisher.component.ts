import { Component, OnInit,Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PublisherResourceModule } from '../shared/publisher-resource.module';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../shared/book-service.service';
@Component({
  selector: 'app-dialog-publisher',
  templateUrl: './dialog-publisher.component.html',
  styleUrls: ['./dialog-publisher.component.css']
})
export class DialogPublisherComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private route:ActivatedRoute, private bookservice:BookService) {
  }

  ngOnInit(): void {

  }
delete(){
//   console.log('id',this.data.id)
  this.bookservice.deletePublisher(this.data.id).subscribe()
}
  
}
