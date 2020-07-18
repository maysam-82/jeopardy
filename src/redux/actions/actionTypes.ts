import {
	IFetchCategoriesFailed,
	IFetchCategoriesSucceeded,
	IFetchCategoriesStarted,
	IFetchCluesFailed,
	IFetchCluesSucceeded,
	IFetchCluesStarted,
	ISetCategory,
} from './categories';
export enum ActionTypes {
	getCategories,
	fetchCategoriesStarted,
	fetchCategoriesSucceeded,
	fetchCategoriesFailed,
	getCategory,
	fetchCluesStarted,
	fetchCluesSucceeded,
	fetchCluesFailed,
	setCategory,
}

export type CategoriesActions =
	| IFetchCategoriesStarted
	| IFetchCategoriesSucceeded
	| IFetchCategoriesFailed
	| IFetchCluesStarted
	| IFetchCluesSucceeded
	| IFetchCluesFailed
	| ISetCategory;
