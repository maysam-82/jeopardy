import { Dispatch } from 'redux';
import { ActionTypes } from './index';
import { ICategory, IClue } from '../../types/category.d';
import { getDataFromAPI } from '../../services/api';

export interface IFetchCategoriesStarted {
	type: ActionTypes.fetchCategoriesStarted;
}

export interface IFetchCategoriesFailed {
	type: ActionTypes.fetchCategoriesFailed;
}

export interface IFetchCategoriesSucceeded {
	type: ActionTypes.fetchCategoriesSucceeded;
	payload: ICategory[];
}

export interface IFetchCategoryStarted {
	type: ActionTypes.fetchCategoryStarted;
}

export interface IFetchCategoryFailed {
	type: ActionTypes.fetchCategoryFailed;
}

export interface IFetchCategorySucceeded {
	type: ActionTypes.fetchCategorySucceeded;
	payload: IClue[];
}

export interface ISetCategory {
	type: ActionTypes.setCategory;
	payload: ICategory;
}

export const getCategories = () => (dispatch: Dispatch) => {
	dispatch<IFetchCategoriesStarted>(fetchCategoriesStarted());

	getDataFromAPI<ICategory>('https://jservice.io/api/categories?count=20')
		.then((response) => {
			dispatch<IFetchCategoriesSucceeded>(
				fetchCategoriesSucceeded(response as ICategory[])
			);
		})
		.catch((error) => {
			dispatch<IFetchCategoriesFailed>(fetchCategoriesFailed());
		});
};

export const fetchCategoriesStarted = (): IFetchCategoriesStarted => {
	return { type: ActionTypes.fetchCategoriesStarted };
};

export const fetchCategoriesFailed = (): IFetchCategoriesFailed => {
	return { type: ActionTypes.fetchCategoriesFailed };
};

export const fetchCategoriesSucceeded = (
	categories: ICategory[]
): IFetchCategoriesSucceeded => {
	return { type: ActionTypes.fetchCategoriesSucceeded, payload: categories };
};

export const fetchCategoryStarted = (): IFetchCategoryStarted => {
	return { type: ActionTypes.fetchCategoryStarted };
};

export const fetchCategoryFailed = (): IFetchCategoryFailed => {
	return { type: ActionTypes.fetchCategoryFailed };
};

export const fetchCategorySucceeded = (
	clues: IClue[]
): IFetchCategorySucceeded => {
	return {
		type: ActionTypes.fetchCategorySucceeded,
		payload: clues,
	};
};

export const setCategory = (category: ICategory): ISetCategory => {
	return {
		type: ActionTypes.setCategory,
		payload: category,
	};
};

export const getClues = (selectedCategoryId: number) => (
	dispatch: Dispatch
) => {
	dispatch<IFetchCategoryStarted>(fetchCategoryStarted());

	getDataFromAPI<IClue>(
		`https://jservice.io/api/clues?category=${selectedCategoryId}`
	)
		.then((response) => {
			dispatch<IFetchCategorySucceeded>(
				fetchCategorySucceeded(response as IClue[])
			);
		})
		.catch((error) => {
			dispatch<IFetchCategoryFailed>(fetchCategoryFailed());
		});
};
