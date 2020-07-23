import { ActionTypes } from '../../actions/actionTypes';
import categoriesReducer from '../categoriesReducer';
import {
	IFetchCategoriesSucceeded,
	IFetchCategoriesStarted,
	IFetchCluesFailed,
	IFetchCategoriesFailed,
	IFetchCluesSucceeded,
	IFetchCluesStarted,
	ISetCategory,
} from '../../actions/categories';
import { testCategories, testClues } from '../../../fixtures/testData';
import { INITIAL_STATE } from '../categoriesReducer';

describe('`categoriesReducer`', () => {
	it('should handle action of `fetchCategorySuccess`', () => {
		const fakeAction: IFetchCategoriesSucceeded = {
			type: ActionTypes.fetchCategoriesSucceeded,
			payload: testCategories,
		};
		const newState = categoriesReducer(INITIAL_STATE, fakeAction);
		expect(newState.categories).toEqual(testCategories);
	});
	it('should handle action of `fetchCategoriesStarted`', () => {
		const fakeAction: IFetchCategoriesStarted = {
			type: ActionTypes.fetchCategoriesStarted,
		};
		const newState = categoriesReducer(INITIAL_STATE, fakeAction);
		expect(newState.isFetching).toBeTruthy();
	});
	it('should handle action of `fetchCategoriesFailed`', () => {
		const fakeAction: IFetchCategoriesFailed = {
			type: ActionTypes.fetchCategoriesFailed,
		};
		const newState = categoriesReducer(INITIAL_STATE, fakeAction);
		expect(newState.isFetching).toBeFalsy();
	});
	it('should handle action of `fetchCluesSucceeded`', () => {
		const fakeAction: IFetchCluesSucceeded = {
			type: ActionTypes.fetchCluesSucceeded,
			payload: testClues,
		};
		const newState = categoriesReducer(INITIAL_STATE, fakeAction);
		expect(newState.clues).toEqual(testClues);
	});
	it('should handle action of `fetchCluesFailed`', () => {
		const fakeAction: IFetchCluesFailed = {
			type: ActionTypes.fetchCluesFailed,
		};
		const newState = categoriesReducer(INITIAL_STATE, fakeAction);
		expect(newState.isFetching).toBeFalsy();
	});
	it('should handle action of `fetchCluesStarted`', () => {
		const fakeAction: IFetchCluesStarted = {
			type: ActionTypes.fetchCluesStarted,
		};
		const newState = categoriesReducer(INITIAL_STATE, fakeAction);
		expect(newState.isFetching).toBeTruthy();
	});
	it('should handle action of `setCategory`', () => {
		const fakeAction: ISetCategory = {
			type: ActionTypes.setCategory,
			payload: testCategories[0],
		};
		const newState = categoriesReducer(INITIAL_STATE, fakeAction);
		expect(newState.selectedCategory).toEqual(testCategories[0]);
	});
});
