import { Dispatch } from 'redux';
import { ActionTypes } from './index';
import { ICategory } from '../../types/category';
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
