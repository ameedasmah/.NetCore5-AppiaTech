import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookResource } from './book-service.model';
import { HttpParams, HttpClient } from '@angular/common/http';
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
    // const params = new HttpParams().set("page", "1").set("pageSize", "10");
    return this.http.get<PublisherResourceModule[]>('https://localhost:5001/api/publisher')
  }
  loadAuthors(): Observable<AuthorResourceModule[]> {
    // const params = new HttpParams().set("page", "1").set("pageSize", "10");
    return this.http.get<AuthorResourceModule[]>('https://localhost:5001/api/authours')
  }
}
