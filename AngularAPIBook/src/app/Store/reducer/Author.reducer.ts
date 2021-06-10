import { createReducer, on } from "@ngrx/store";
import { AuthorResource } from "src/app/shared/Author/author-resource/author-resource";
import { increment, getAuthorsSuccess, addAuthorSuccess, DeleteAuthorSuccess, updateAuthorSuccess, loadOneAuthorSuccsiss } from './../action/Author.action';

export interface State {
    number: number;
    Authors: AuthorResource[];

}

export const initialState: State = {
    number: 0,
    Authors: []
};
export const Reducer = createReducer(initialState,
    on(increment, (state, { number }) => ({ ...state, number: state.number + number })),
    on(getAuthorsSuccess, (state, action) => ({ ...state, Authors: action.Author })),
    on(addAuthorSuccess, (state, action) => {
        const addingoneAuthor = action.newAuthor;
        const addingoneAuthorHierarchies = Object.assign([], state.Authors);
        addingoneAuthorHierarchies.push(addingoneAuthor);
        return {
            ...state,
            Authors: addingoneAuthorHierarchies,
        }
    }),
    on(updateAuthorSuccess, (state, action) => {
        const updatedAuthor = action.updateAuthor;
        const authorsList = [...state.Authors]; // Object.assign([],state.Authors);
        const index = authorsList.findIndex(x => x.id == updatedAuthor.id);
        authorsList[index] = updatedAuthor;
        return {
            ...state,
            Authors: authorsList
        }
    })
);


