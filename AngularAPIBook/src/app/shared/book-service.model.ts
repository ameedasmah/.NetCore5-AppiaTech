import { BookNewPublisher } from "./book-new-publisher.model";
import { BookAuthorResource } from './book-author-resource.model';

export class BookResource {
    id: number;
    title: string;
    discraptions: string;
    publisherId?: number;
    newpublisher: BookNewPublisher;
    bookAuthorResources: BookAuthorResource[];
}
