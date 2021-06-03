import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookResource } from './book-service.model';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { PublisherResourceModule } from './publisher-resource.module';
import { AuthorResourceModule } from './author-resource.module';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }
// book
// get Books
  loadBooks(): Observable<BookResource[]> {
    const params = new HttpParams().set("page", "1").set("pageSize", "10");
    return this.http.get<BookResource[]>('https://localhost:5001/api/books', { params })
  }
// Post Book
postBook(res:any):Observable<any>{
let obj = {
  title:res.title,
  discraptions:res.discraptions,
  publisherId:res.publisherId,
}
const body = JSON.stringify(obj);
const headers= new HttpHeaders({
  "Content-Type": "application/json;charset=utf-8;",
});
const options = {headers:headers};
return this.http.post('https://localhost:5001/api/books',body,options)
.pipe(map((res:any)=>res));
}

//dekete Books
deleteBook(id:number){
  this.http.delete('https://localhost:5001/api/books/'+id).subscribe();
}
  

  // author
  // Get Author
  loadAuthors(): Observable<AuthorResourceModule[]> {
    return this.http.get<AuthorResourceModule[]>('https://localhost:5001/api/authours')
  }
// Post Author
  AddAuthor(response:any):Observable<any>{
    const obj ={
      fullName: response.fullName,
      email:response.email,
      age:response.age
    }
    const body=JSON.stringify(obj);
    const headers = new HttpHeaders({
      "Content-Type": "application/json;charset=utf-8;",
    });
    const options = { headers: headers };
    return this.http
      .post('https://localhost:5001/api/authours', body, options)
      .pipe(map((res: any) => res));
  }

  // delete Author
  deleteAuthor(id:number){
    this.http.delete('https://localhost:5001/api/authours/'+id).subscribe();
  }

// Publisher Service
// get Publisher
  loadPublisher(): Observable<PublisherResourceModule[]> {
    return this.http.get<PublisherResourceModule[]>('https://localhost:5001/api/publisher')
  }
  // get publisher by Id
  loadOnePublisher(id:any):Observable<any>{
    return this.http.get<any>('https://localhost:5001/api/publisher/'+id);
  }

  // Post Publisher
  addPublisher(response:any):Observable<any>{
    const obj = {
      name:response.name,
      email:response.email,
      dateOfBirth:response.dateOfBirth,
      salery:response.salery,
    }
    const body = JSON.stringify(obj);
    const headers = new HttpHeaders({
      "Content-Type": "application/json;charset=utf-8;"
    })
    const options = {headers:headers};
    return this.http.post('https://localhost:5001/api/Publisher',body,options)
    .pipe(map((res:any)=>res))
  }

// delete Publisher

deletePublisher(id:any){
  this.http.delete('https://localhost:5001/api/Publisher/'+id).subscribe();
}
PutPublisher(id:number,response:any):Observable<any>{
  const obj = {
    name:response.name,
    email:response.email,
    dateOfBirth:response.dateOfBirth,
    salery:response.salery,
  }
  const body = JSON.stringify(obj);
  const headers = new HttpHeaders({
    "Content-Type": "application/json;charset=utf-8;"
  })
  const options = {headers:headers};
  return this.http.put('https://localhost:5001/api/Publisher/'+id,body,options)
  .pipe(map((res:any)=>res))
}

}
