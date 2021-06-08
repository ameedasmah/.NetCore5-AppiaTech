import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import * as AuthorActions from '../action/Author.action';
import { BookService } from './../../shared/book-service.service';
import { AuthorModel } from './../../shared/Model/Author/Author.model';
import { updateAuthorSuccess } from './../action/Author.action';

@Injectable()
export class AuthorEffects {

  constructor(
    private actions$: Actions,
    private bookService: BookService
  ) { }

  GetAuthors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorActions.loadAuthors),
      exhaustMap(action =>
        this.bookService.loadAuthors().pipe(
          map(response => {
            console.log('ameed', response)
            return AuthorActions.getAuthorsSuccess({ Author: response })
          }),
          catchError((errorMessage: string) =>of(AuthorActions.getAuthorsFailure({errorMessage})))
        ))
    )
  )


  AddAuthors$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthorActions.addAuthor),
      exhaustMap(action =>
        this.bookService.AddAuthor(action.newAuthor).pipe(
          map(response => {
            console.log('ameed', response)
            return AuthorActions.addAuthorSuccess({newAuthor:response})
          }),
          catchError((errorMessage: string) =>of(AuthorActions.addAuthorFailure({errorMessage})))
        ))
    )
  );


  deleteAuthors$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AuthorActions.DeleteAuthor),
    exhaustMap((action) =>
      this.bookService.deleteAuthor(action.id).pipe(
        map(() => {
          return AuthorActions.DeleteAuthorSuccess({id:action.id})
        }),
        catchError((errorMessage: string) =>of(AuthorActions.DeleteAuthorFailure({errorMessage})))
      ))
  )
);

deleteAuthorsSuccess$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AuthorActions.DeleteAuthorSuccess),
    map(() => AuthorActions.loadAuthors())
  )
);

UpdateAuthors$ = createEffect(() =>
this.actions$.pipe(
  ofType(AuthorActions.updateAuthor),
  exhaustMap(action =>
    this.bookService.updteAuthor(action.id,action.updateAuthor).pipe(
      map(response => {
        return AuthorActions.updateAuthorSuccess({updateAuthor:response})
      }),
      catchError((errorMessage: string) =>of(AuthorActions.updateAuthorFailure({errorMessage})))
    ))
)
);


}
