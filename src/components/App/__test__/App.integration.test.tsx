import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import { testCategories, testClues } from '../../../fixtures/testData';
import Root from '../../../Root';
import App from '../../../components/App/App';
import { MemoryRouter } from 'react-router-dom';
import { IStoreState } from '../../../redux/reducers';

describe('Home page', () => {
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

	it('should fetch and render of three categories', async (done) => {
		const component = mount(
			<Root>
				<MemoryRouter initialEntries={['/', '/category']}>
					<App />
				</MemoryRouter>
			</Root>
		);
		moxios.wait(() => {
			component.update();
			expect(component.find('ListGroupItem').length).toEqual(3);
			done();
			component.unmount();
		});
	});
});

describe('Category page', () => {
	const testStore: IStoreState = {
		category: {
			isFetching: false,
			categories: testCategories,
			selectedCategory: testCategories[0],
			clues: [],
		},
	};
	beforeEach(() => {
		moxios.install();
		moxios.stubRequest(
			`https://jservice.io/api/clues?category=${testStore.category.selectedCategory.id}`,
			{
				status: 200,
				response: testClues,
			}
		);
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it('should fetch and render of two clues', async (done) => {
		const component = mount(
			<Root initialState={testStore}>
				<MemoryRouter initialEntries={['/category']}>
					<App />
				</MemoryRouter>
			</Root>
		);

		moxios.wait(() => {
			component.update();
			expect(component.find('Clue').length).toEqual(2);
			done();
			component.unmount();
		});
	});
});
