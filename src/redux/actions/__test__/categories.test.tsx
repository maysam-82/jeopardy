import * as categoryActions from '../categories';
import { ActionTypes } from '../actionTypes';
import { testCategories, testClues } from '../../../fixtures/testData';
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import moxios from 'moxios';
import { IStoreState } from '../../reducers';
import { ICategoriesReducerState } from '../../reducers/categoriesReducer';
import { AnyAction } from 'redux';

type DispatchExts = ThunkDispatch<IStoreState, void, AnyAction>;
const middlewares = [thunk];
const mockStore = configureMockStore<IStoreState, DispatchExts>(middlewares);

describe('action creators', () => {
	describe('`getCategories` succeeded', () => {
		beforeEach(() => {
			moxios.install();
			moxios.stubRequest('https://jservice.io/api/categories?count=20', {
				status: 200,
				response: testCategories,
			});
		});

		afterEach(() => {
			moxios.uninstall();
		});
		it('should disptach `fetchCategoriesStarted` and `fetchCategoriesSucceeded` after fetching categories', (done) => {
			const expectedActions = [
				{ type: ActionTypes.fetchCategoriesStarted },
				{ type: ActionTypes.fetchCategoriesSucceeded, payload: testCategories },
			];
			const store = mockStore({ category: {} as ICategoriesReducerState });
			moxios.wait(() => {
				return store.dispatch(categoryActions.getCategories()).then(() => {
					expect(store.getActions()).toEqual(expectedActions);
					done();
				});
			});
		});
	});

	describe('`getClues` succeeded', () => {
		beforeEach(() => {
			moxios.install();
			moxios.stubRequest(
				`https://jservice.io/api/clues?category=${testCategories[0].id}`,
				{
					status: 200,
					response: testClues,
				}
			);
		});
		afterEach(() => {
			moxios.uninstall();
		});
		it('should dispatch `fetchCluesStarted` and `fetchCluesSucceeded` after fetching clues succeeded', (done) => {
			const expectedActions = [
				{ type: ActionTypes.fetchCluesStarted },
				{ type: ActionTypes.fetchCluesSucceeded, payload: testClues },
			];
			const store = mockStore({ category: {} as ICategoriesReducerState });
			moxios.wait(() => {
				return store
					.dispatch(categoryActions.getClues(testCategories[0].id))
					.then(() => {
						expect(store.getActions()).toEqual(expectedActions);
						done();
					});
			});
		});
	});
	describe('`getClues` failed', () => {
		beforeEach(() => {
			moxios.install();
			moxios.stubRequest(/.*/, {
				status: 400,
				response: { message: 'request failed' },
			});
		});
		afterEach(() => {
			moxios.uninstall();
		});
		it('should dispatch `fetchCluesStarted` and `fetchCluesFailed` after fetching clues failed', (done) => {
			const expectedActions = [
				{ type: ActionTypes.fetchCluesStarted },
				{ type: ActionTypes.fetchCluesFailed },
			];
			const store = mockStore({ category: {} as ICategoriesReducerState });
			moxios.wait(() => {
				return store
					.dispatch(categoryActions.getClues(testCategories[0].id))
					.then(() => {
						expect(store.getActions()).toEqual(expectedActions);
						done();
					});
			});
		});
	});

	describe('`getCategories` failed', () => {
		beforeEach(() => {
			moxios.install();
			moxios.stubRequest(/.*/, {
				status: 400,
				response: { message: 'request failed' },
			});
		});
		afterEach(() => {
			moxios.uninstall();
		});
		it('should dispatch `fetchCategoriesStarted` and `fetchCategoriesFailed` after fetching categories failed', (done) => {
			const expectedActions = [
				{ type: ActionTypes.fetchCategoriesStarted },
				{ type: ActionTypes.fetchCategoriesFailed },
			];
			const store = mockStore({ category: {} as ICategoriesReducerState });
			moxios.wait(() => {
				return store.dispatch(categoryActions.getCategories()).then(() => {
					expect(store.getActions()).toEqual(expectedActions);
					done();
				});
			});
		});
	});

	describe('Failed action creators', () => {
		it('should have correct action `type` for `fetchCategoriesFailed` action', () => {
			const action = categoryActions.fetchCategoriesFailed();
			expect(action.type).toEqual(ActionTypes.fetchCategoriesFailed);
		});
		it('should have correct action `type` for `fetchCluesFailed` action', () => {
			const action = categoryActions.fetchCluesFailed();
			expect(action.type).toEqual(ActionTypes.fetchCluesFailed);
		});
	});

	describe('`setCategory` action', () => {
		const action = categoryActions.setCategory(testCategories[0]);
		expect(action.type).toEqual(ActionTypes.setCategory);
		expect(action.payload).toEqual(testCategories[0]);
	});
});
