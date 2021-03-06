import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookResource } from './book-service.model';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { PublisherResourceModule } from './publisher-resource.module';
import { AuthorResource } from '../shared/Author/author-resource/author-resource';

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
  // lodOneBook
  lodOneBook(id: any): Observable<any> {
    return this.http.get<any>('https://localhost:5001/api/books/' + id);
  }
  // Post Book
  postBook(res: any): Observable<any> {
    let obj = {
      title: res.title,
      discraptions: res.discraptions,
      publisherId: res.publisherId,
      authorIds:res.authors,
    }
    const body = JSON.stringify(obj);
    const headers = new HttpHeaders({
      "Content-Type": "application/json;charset=utf-8;",
    });
    const options = { headers: headers };
    return this.http.post('https://localhost:5001/api/books', body, options)
      .pipe(map((res: any) => res));
  }

  //dekete Books
  deleteBook(id: number) {
    this.http.delete('https://localhost:5001/api/books/' + id).subscribe();
  }


  // author
  // Get Author
  loadAuthors(): Observable<AuthorResource[]> {
    return this.http.get<AuthorResource[]>('https://localhost:5001/api/authours')
  }
  // load one Author
  loadOneAuthor(id: any): Observable<any> {
    return this.http.get<any>('https://localhost:5001/api/authours/' + id);
  }
  // Post Author
  AddAuthor(model: any): Observable<any> {
    const obj = {
      fullName: model.fullName,
      email: model.email,
      age: model.age
    }
    const body = JSON.stringify(obj);
    const headers = new HttpHeaders({
      "Content-Type": "application/json;charset=utf-8;",
    });
    const options = { headers: headers };
    return this.http
      .post('https://localhost:5001/api/authours', body, options)
      .pipe(map((res: any) => res));
  }

  //PutAuthor

  updteAuthor(id: any, res: any): Observable<any> {
    let obj = {
      fullName: res.fullName,
      email: res.email,
      age: res.age
    }
    const body = JSON.stringify(obj);
    let headers = new HttpHeaders({
      "Content-Type": "application/json;charset=utf-8;",
    })
    const options = { headers: headers };
    return this.http.put('https://localhost:5001/api/authours/' + id, body, options)
      .pipe(map((res: any) => res));
  }

  // delete Author
  deleteAuthor(id: number) {
    return this.http.delete('https://localhost:5001/api/authours/' + id);
  }

  // Publisher Service
  // get Publisher
  loadPublisher(): Observable<PublisherResourceModule[]> {
    return this.http.get<PublisherResourceModule[]>('https://localhost:5001/api/publisher')
  }
  // get publisher by Id
  loadOnePublisher(id: any): Observable<any> {
    return this.http.get<any>('https://localhost:5001/api/publisher/' + id);
  }

  // Post Publisher
  addPublisher(response: any): Observable<any> {
    const obj = {
      name: response.name,
      email: response.email,
      dateOfBirth: response.dateOfBirth,
      salery: response.salery,
    }
    const body = JSON.stringify(obj);
    const headers = new HttpHeaders({
      "Content-Type": "application/json;charset=utf-8;"
    })
    const options = { headers: headers };
    return this.http.post('https://localhost:5001/api/Publisher', body, options)
      .pipe(map((res: any) => res))
  }

  // delete Publisher

  deletePublisher(id: any) {
  return  this.http.delete('https://localhost:5001/api/Publisher/' + id);
  }
  PutPublisher(id: number, response: any): Observable<any> {
    const obj = {
      name: response.name,
      email: response.email,
      dateOfBirth: response.dateOfBirth,
      salery: response.salery,
    }
    const body = JSON.stringify(obj);
    const headers = new HttpHeaders({
      "Content-Type": "application/json;charset=utf-8;"
    })
    const options = { headers: headers };
    return this.http.put('https://localhost:5001/api/Publisher/' + id, body, options)
      .pipe(map((res: any) => res))
  }

}
