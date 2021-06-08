import { createReducer, on } from "@ngrx/store";
import { AuthorResource } from "src/app/shared/Author/author-resource/author-resource";
import { increment ,getAuthorsSuccess, addAuthorSuccess, DeleteAuthorSuccess} from './../action/Author.action';

export interface State{
    number:number;
    Authors: AuthorResource[];
}

export const initialState :State = {
    number:0,
    Authors:[]
};
export const Reducer = createReducer(initialState,
    on(increment,(state,{number})=>({...state,number:state.number+number})),
    on(getAuthorsSuccess, (state, action) => ({...state,Authors:action.Author})),
    on(addAuthorSuccess,(state, action)=>({...state, Authors: {...state.Authors, action} as AuthorResource[]})) ,
    on(DeleteAuthorSuccess,(state,action)=>({...state}))
    );


