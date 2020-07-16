import {
	IFetchCategoriesFailed,
	IFetchCategoriesSucceeded,
	IFetchCategoriesStarted,
} from './categories';
export enum ActionTypes {
	getCategories,
	fetchCategoriesStarted,
	fetchCategoriesSucceeded,
	fetchCategoriesFailed,
}

export type CategoriesActions =
	| IFetchCategoriesStarted
	| IFetchCategoriesSucceeded
	| IFetchCategoriesFailed;
