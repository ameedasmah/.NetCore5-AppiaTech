import { createAction, props } from "@ngrx/store";
import { Observable } from 'rxjs';
import { AuthorResource } from '../../shared/Author/author-resource/author-resource';
import { AuthorModel } from './../../shared/Model/Author/Author.model';

export const increment = createAction('Increment',
    props<{ number: number }>()
);


// load
export const loadAuthors = createAction('loadAuthors')
export const getAuthorsSuccess = createAction('getAuthorsSuccess',
    props<{ Author: AuthorResource[] }>()
)

// add
export const addAuthor = createAction('addAuthor',
    props<{ newAuthor: AuthorModel }>()
);

export const addAuthorSuccess = createAction('addAuthorSuccess',
    props<{ newAuthor: AuthorResource }>()
);

export const addAuthorFailure = createAction('addAuthorFailure',
    props<{ errorMessage: string }>()
);

// delete
export const DeleteAuthor = createAction('DeleteAuthor',
    props<{ id: number }>()
);

export const DeleteAuthorSuccess = createAction('DeleteAuthorSucsses',
    props<{ id: number }>()
);

export const DeleteAuthorFailure = createAction('DeleteAuthorSuccessFailure',
    props<{ errorMessage: string }>()
);

// update
export const updateAuthor = createAction('updateAuthor',
props<{id:number,updateAuthor: AuthorModel}>()
)


export const updateAuthorSuccess = createAction('updateAuthorSuccess',
props<{updateAuthor: AuthorResource}>()
)


export const updateAuthorFailure = createAction('updateAuthorFailure',
props<{errorMessage: string}>()
)

