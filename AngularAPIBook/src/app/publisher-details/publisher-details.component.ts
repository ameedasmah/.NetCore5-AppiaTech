import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PublisherResourceModule } from './../shared/publisher-resource.module';
import { BookService } from './../shared/book-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogPublisherComponent } from './../dialog-publisher/dialog-publisher.component';

@Component({
  selector: 'app-publisher-details',
  templateUrl: './publisher-details.component.html',
  styleUrls: ['./publisher-details.component.css']
})
export class PublisherDetailsComponent implements OnInit {

  PublisherResource: PublisherResourceModule[]
  constructor(private bookService: BookService, public route: ActivatedRoute, private router: Router,public dialog:MatDialog) { }
  headers = ["id", "name", "books", "Edit", "Delete"];
  loadnePublisher: any;
  id: number;
  data: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']

    this.getData();
  }


  createNewPublisher() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  deletePublisher(id: number) {
    return this.bookService.deletePublisher(id).subscribe(() => this.getData());
  }
  edit(id: number) {
    console.log(id)
    this.bookService.loadOnePublisher(id).subscribe(data => console.log('DATAAAAA', data))
    this.router.navigate(['edit/' + id], { relativeTo: this.route })
  }
  getData() {
    this.bookService.loadPublisher()
      .subscribe(data => {
        console.log('data Loaded!!', data)
        this.PublisherResource = data;
      });
  }
  openDialog(){
   let dialogRef= this.dialog.open(DialogPublisherComponent,{
     data:{
      deletePublisher:(id: number) =>{
        return this.bookService.deletePublisher(id).subscribe(() => this.getData());
      },
      getData:()=>{
        this.bookService.loadPublisher()
        .subscribe(data => {
          console.log('data Loaded!!', data)
          this.PublisherResource = data;
        })
      },
      id:this.id
     }
    })
   dialogRef.afterClosed().subscribe((result)=>{
     console.log(`Dialog result: ${result}`)
   })
  }
}
