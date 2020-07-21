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
	const component = shallow(<Category {...testCategoryProps} />);

	it('should render Category component', () => {
		expect(component).toMatchSnapshot();
		jest.clearAllMocks();
	});
	describe('When there is a `selectedCategory`', () => {
		let wrapper: ShallowWrapper;
		beforeEach(() => {
			wrapper = shallow(<Category {...testCategoryProps} />);
		});
		afterEach(() => {
			jest.clearAllMocks();
			component.unmount();
		});
		it('should call `getClues` function', () => {
			expect(testCategoryProps.getClues).toHaveBeenCalledTimes(1);
		});
		it('should render `Spinner` while fetching', () => {
			wrapper.setProps({ isFetching: true });
			expect(wrapper.find('Spinner')).not.toBeNull;
		});
		it('should not render `Spinner` after fetching', () => {
			wrapper.setProps({ isFetching: false });
			expect(wrapper.find('Spinner')).toBeNull;
		});
	});
	describe('When there is not a `selectedCategory`', () => {
		const newProps = {
			...testCategoryProps,
			selectedCategory: {} as ICategory,
		};
		const componentWithNoData = shallow(<Category {...newProps} />);
		it('should not call `getClues` function', () => {
			expect(newProps.getClues).toHaveBeenCalledTimes(0);
		});
	});
});
