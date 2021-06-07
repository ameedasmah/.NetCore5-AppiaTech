import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import * as AuthorActions from '../action/Author.action';
import { BookService } from './../../shared/book-service.service';

@Injectable()
export class AuthorEffects {

  constructor(
    private actions$: Actions,
    private bookService: BookService
  ) {}

  GetAuthors$ = createEffect(() =>
  this.actions$.pipe(
    ofType(AuthorActions.getAuthors),
    exhaustMap(action =>
      this.bookService.loadAuthors().pipe(
        map(response => AuthorActions.getAuthors(response as any)),
        ))
    )
  );
}