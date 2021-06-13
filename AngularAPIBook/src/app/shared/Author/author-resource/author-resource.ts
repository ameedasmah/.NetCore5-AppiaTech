import { AuthorBookResource } from './author-book-resource';


export class AuthorResource {
  id: number;
  fullName: string;
  email: string;
  age: number;
  books: AuthorBookResource[];
}
