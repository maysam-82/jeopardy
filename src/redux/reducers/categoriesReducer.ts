import { ActionTypes, CategoriesActions } from '../actions';
import { ICategory, IClue } from '../../types/category.d';

export interface ICategoriesReducerState {
	isFetching: boolean;
	categories: ICategory[];
	selectedCategory: ICategory;
	clues: IClue[];
}

const INITIAL_STATE: ICategoriesReducerState = {
	isFetching: false,
	categories: [],
	selectedCategory: {} as ICategory,
	clues: [],
};

const categoriesReducer = (
	state = INITIAL_STATE,
	action: CategoriesActions
) => {
	switch (action.type) {
		case ActionTypes.fetchCategoriesStarted:
		case ActionTypes.fetchCluesStarted:
			return { ...state, isFetching: true };

		case ActionTypes.fetchCategoriesSucceeded:
			return { ...state, isFetching: false, categories: action.payload };

		case ActionTypes.fetchCluesSucceeded:
			return {
				...state,
				isFetching: false,
				clues: action.payload,
			};

		case ActionTypes.fetchCategoriesFailed:
			return {
				...state,
				isFetching: false,
				categories: [],
			};

		case ActionTypes.fetchCluesFailed:
			return { ...state, isFetching: false, clues: [] };

		case ActionTypes.setCategory:
			const { id, title, clues_count } = action.payload;
			return {
				...state,
				selectedCategory: { ...state.selectedCategory, id, title, clues_count },
			};

		default:
			return state;
	}
};
export default categoriesReducer;
