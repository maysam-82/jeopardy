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

export interface IFetchCluesStarted {
	type: ActionTypes.fetchCluesStarted;
}

export interface IFetchCluesFailed {
	type: ActionTypes.fetchCluesFailed;
}

export interface IFetchCluesSucceeded {
	type: ActionTypes.fetchCluesSucceeded;
	payload: IClue[];
}

export interface ISetCategory {
	type: ActionTypes.setCategory;
	payload: ICategory;
}

export const getCategories = () => async (dispatch: Dispatch) => {
	dispatch<IFetchCategoriesStarted>(fetchCategoriesStarted());
	try {
		const response = await getDataFromAPI<ICategory>(
			'https://jservice.io/api/categories?count=20'
		);
		dispatch<IFetchCategoriesSucceeded>(
			fetchCategoriesSucceeded(response as ICategory[])
		);
	} catch (error) {
		dispatch<IFetchCategoriesFailed>(fetchCategoriesFailed());
	}
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

export const fetchCluesStarted = (): IFetchCluesStarted => {
	return { type: ActionTypes.fetchCluesStarted };
};

export const fetchCluesFailed = (): IFetchCluesFailed => {
	return { type: ActionTypes.fetchCluesFailed };
};

export const fetchCluesSucceeded = (clues: IClue[]): IFetchCluesSucceeded => {
	return {
		type: ActionTypes.fetchCluesSucceeded,
		payload: clues,
	};
};

export const setCategory = (category: ICategory): ISetCategory => {
	return {
		type: ActionTypes.setCategory,
		payload: category,
	};
};

export const getClues = (selectedCategoryId: number) => async (
	dispatch: Dispatch
) => {
	dispatch<IFetchCluesStarted>(fetchCluesStarted());
	try {
		const response = await getDataFromAPI<IClue>(
			`https://jservice.io/api/clues?category=${selectedCategoryId}`
		);
		dispatch<IFetchCluesSucceeded>(fetchCluesSucceeded(response as IClue[]));
	} catch (error) {
		dispatch<IFetchCluesFailed>(fetchCluesFailed());
	}
};
