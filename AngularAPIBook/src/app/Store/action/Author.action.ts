import { createAction, props } from "@ngrx/store";
import { Observable } from 'rxjs';
import { AuthorResource } from '../../shared/Author/author-resource/author-resource';
import { AuthorModel } from './../../shared/Model/Author/Author.model';

export const increment = createAction('Increment',
    props<{number:number}>()
);

export const loadAuthors = createAction('loadAuthors')
export const getAuthorsSuccess = createAction('getAuthorsSuccess',
props<{Author:AuthorResource[]} >()
)


export const addAuthor = createAction('addAuthor',
props<{newAuthor:AuthorModel}>()
);

export const addAuthorSuccess = createAction('addAuthorSuccess',
props<{newAuthor:AuthorResource}>()
);

export const addAuthorFailure = createAction('addAuthorFailure',
props<{errorMessage: string}>()
);


// export enum AccountActionsTypes {
//   AccountLogin = '[Login Page] Account Login',
//   AccountLoginSuccess = '[Login Page] Account Login Success',
//   AccountLoginFailed = '[Login Page] Account Login Failed',

//   AccountLogout = '[Header] Account Logout',

//   AccountActivation = '[Activation page] Account Activation',
//   AccountActivationSuccess = '[Activation page] Account Activation Success',
//   AccountActivationFailed = '[Activation page] Account Activation Failed',
// }

// export const login = createAction(AccountActionsTypes.AccountLogin, props<{ email: string; password: string }>());

// export const loginSuccess = createAction(AccountActionsTypes.AccountLoginSuccess, props< { account : AccountModel, token : string, message: string, status: string}>());

// export const loginFailed = createAction(AccountActionsTypes.AccountLoginFailed);

// export const logout = createAction(AccountActionsTypes.AccountLogout);

// export const accountActivation = createAction(AccountActionsTypes.AccountActivation, props<{formula : string}>());

// export const accountActivationSuccess = createAction(AccountActionsTypes.AccountActivationSuccess, props<{message : string}>());

// export const accountActivationFailed = createAction(AccountActionsTypes.AccountActivationFailed, props<{error : string}>());