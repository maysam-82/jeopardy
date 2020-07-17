import { combineReducers } from 'redux';
import categoriesReducer, {
	ICategoriesReducerState,
} from './categoriesReducer';

export interface IStoreState {
	category: ICategoriesReducerState;
}

export const reducers = combineReducers<IStoreState>({
	category: categoriesReducer,
});
