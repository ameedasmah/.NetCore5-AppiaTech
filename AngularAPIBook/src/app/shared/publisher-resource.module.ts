import { PublisherBookResourceModule } from './publisher-book-resource.module';
export class PublisherResourceModule {
  id: number;
  name: string;
  books: PublisherBookResourceModule[];
}
