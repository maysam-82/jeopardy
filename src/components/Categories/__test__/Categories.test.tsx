import React from 'react';
import { shallow } from 'enzyme';
import Categories, { ICategoriesProps } from '../Categories';
import { testCategories } from '../../../fixtures/testData';

const testCategoryProps: ICategoriesProps = {
	categories: testCategories,
	categoryClick: jest.fn(),
};

describe('Categories component', () => {
	const component = shallow(<Categories {...testCategoryProps} />);
	it('should render Categories', () => {
		expect(component).toMatchSnapshot();
	});
	it('should render `ListGroupItem` component', () => {
		expect(component.find('ListGroupItem').length).toEqual(3);
	});
	describe('When user clicks on Category', () => {
		beforeEach(() => {
			component.find('ListGroupItem').at(1).simulate('click');
		});
		it('should call categoryClick', () => {
			expect(testCategoryProps.categoryClick).toHaveBeenCalledTimes(1);
		});
	});
});
