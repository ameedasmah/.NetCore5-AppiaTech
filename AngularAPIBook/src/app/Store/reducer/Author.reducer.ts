import { createReducer, on } from "@ngrx/store";
import { increment ,getAuthorsSuccess} from './../action/Author.action';

export interface State{
    number:number;
    Authors: any;
}

export const initialState :State = {
    number:0,
    Authors:[]
};

export const Reducer = createReducer(initialState,
    on(increment,(state,{number})=>({...state,number:state.number+number})),
    on(getAuthorsSuccess, (state, action) => ({...state,Authors:action.Author})) 
    );


