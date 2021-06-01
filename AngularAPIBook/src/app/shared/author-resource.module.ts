import { AuthorBookResourceModule } from './author-book-resource.module';


export class AuthorResourceModule {
  id: number;
  fullName: string;
  email: string;
  age: number;
  books: AuthorBookResourceModule[];
}
