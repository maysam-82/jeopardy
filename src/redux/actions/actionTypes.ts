import {
	IFetchCategoriesFailed,
	IFetchCategoriesSucceeded,
	IFetchCategoriesStarted,
	IFetchCategoryFailed,
	IFetchCategorySucceeded,
	IFetchCategoryStarted,
	ISetCategory,
} from './categories';
export enum ActionTypes {
	getCategories,
	fetchCategoriesStarted,
	fetchCategoriesSucceeded,
	fetchCategoriesFailed,
	getCategory,
	fetchCategoryStarted,
	fetchCategorySucceeded,
	fetchCategoryFailed,
	setCategory,
}

export type CategoriesActions =
	| IFetchCategoriesStarted
	| IFetchCategoriesSucceeded
	| IFetchCategoriesFailed
	| IFetchCategoryStarted
	| IFetchCategorySucceeded
	| IFetchCategoryFailed
	| ISetCategory;
