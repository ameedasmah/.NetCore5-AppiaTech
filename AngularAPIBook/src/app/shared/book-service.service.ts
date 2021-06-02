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

  loadBooks(): Observable<BookResource[]> {
    const params = new HttpParams().set("page", "1").set("pageSize", "10");
    return this.http.get<BookResource[]>('https://localhost:5001/api/books', { params })
  }
  loadPublisher(): Observable<PublisherResourceModule[]> {
    return this.http.get<PublisherResourceModule[]>('https://localhost:5001/api/publisher')
  }
  loadAuthors(): Observable<AuthorResourceModule[]> {
    return this.http.get<AuthorResourceModule[]>('https://localhost:5001/api/authours')
  }

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


}
