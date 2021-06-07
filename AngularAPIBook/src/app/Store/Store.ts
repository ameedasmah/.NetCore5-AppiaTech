import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';

import * as AuthorReducer from './reducer/Author.reducer'

export interface State {
    Author: AuthorReducer.State;
}

export const reducers: ActionReducerMap<State> = {
    Author: AuthorReducer.Reducer,
};
const reducerKeys = ['Author'];