import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ICategoryProps, Category } from '../Category';
import { testCategories } from '../../../fixtures/testData';
import { ICategory } from '../../../types/category.d';

const testCategoryProps: ICategoryProps = {
	selectedCategory: testCategories[0],
	isFetching: false,
	getClues: jest.fn(),
};

describe('Category component', () => {
	let component: ShallowWrapper;

	it('should render Category component', () => {
		expect(component).toMatchSnapshot();
	});
	describe('When there is a `selectedCategory`', () => {
		beforeEach(() => {
			component = shallow(<Category {...testCategoryProps} />);
		});
		afterEach(() => {
			jest.clearAllMocks();
		});
		it('should call `getClues` function', () => {
			expect(testCategoryProps.getClues).toHaveBeenCalledTimes(1);
		});
		it('should render `Spinner` while fetching', () => {
			component.setProps({ isFetching: true });
			expect(component.find('Spinner')).not.toBeNull;
		});
		it('should not render `Spinner` after fetching', () => {
			component.setProps({ isFetching: false });
			expect(component.find('Spinner')).toBeNull;
		});
	});
	describe('When there is not a `selectedCategory`', () => {
		const newProps = {
			...testCategoryProps,
			selectedCategory: {} as ICategory,
		};
		component = shallow(<Category {...newProps} />);
		it('should not call `getClues` function', () => {
			expect(newProps.getClues).toHaveBeenCalledTimes(0);
		});
	});
});
