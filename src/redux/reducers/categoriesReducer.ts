import { ActionTypes, CategoriesActions } from '../actions';
import { ICategory, ISelectedCategory } from '../../types/category.d';

export interface ICategoriesReducerState {
	isFetching: boolean;
	categories: ICategory[];
	selectedCategory: ICategory;
	selectedCategoryData: ISelectedCategory[];
}

const INITIAL_STATE: ICategoriesReducerState = {
	isFetching: false,
	categories: [],
	selectedCategory: {} as ICategory,
	selectedCategoryData: [],
};

const categoriesReducer = (
	state = INITIAL_STATE,
	action: CategoriesActions
) => {
	switch (action.type) {
		case ActionTypes.fetchCategoriesStarted:
		case ActionTypes.fetchCategoryStarted:
			return { ...state, isFetching: true };

		case ActionTypes.fetchCategoriesSucceeded:
			return { ...state, isFetching: false, categories: action.payload };

		case ActionTypes.fetchCategorySucceeded:
			return {
				...state,
				isFetching: false,
				selectedCategoryData: action.payload,
			};

		case ActionTypes.fetchCategoriesFailed:
		case ActionTypes.fetchCategoryFailed:
			return { ...state, isFetching: false };

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
