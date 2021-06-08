import { createAction, props } from "@ngrx/store";
import { Observable } from 'rxjs';
import { AuthorResourceModule } from './../../shared/author-resource.module';

export const increment = createAction('Increment',
    props<{number:number}>()
);
export const loadAuthors = createAction('loadAuthors')
export const getAuthorsSuccess = createAction('getAuthorsSuccess',
props<{Author:AuthorResourceModule[]} >()
)