import { ActionTypes, CategoriesActions } from '../actions';
import { ICategory } from '../../types/category';

export interface ICategoriesReducerState {
	isFetching: boolean;
	categories: ICategory[];
}

const INITIAL_STATE: ICategoriesReducerState = {
	isFetching: false,
	categories: [],
};

const categoriesReducer = (
	state = INITIAL_STATE,
	action: CategoriesActions
) => {
	switch (action.type) {
		case ActionTypes.fetchCategoriesStarted:
			return { ...state, isFetching: true };
		case ActionTypes.fetchCategoriesSucceeded:
			return { ...state, isFetching: false, categories: action.payload };
		case ActionTypes.fetchCategoriesFailed:
			return { ...state, isFetching: false };

		default:
			return state;
	}
};
export default categoriesReducer;
