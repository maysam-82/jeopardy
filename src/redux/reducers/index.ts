import { combineReducers } from 'redux';
import categoriesReducer, {
	ICategoriesReducerState,
} from './categoriesReducer';

export interface IStoreState {
	categories: ICategoriesReducerState;
}

export const reducers = combineReducers<IStoreState>({
	categories: categoriesReducer,
});
