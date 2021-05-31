import { Injectable } from '@angular/core';
import { BookResource } from './book-service.model';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }
  formData: BookResource = new BookResource();
}
