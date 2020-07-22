import React from 'react';
import { shallow, ShallowWrapper, mount, ReactWrapper } from 'enzyme';
import { Home, IHomeProps } from '../Home';
import { testCategories } from '../../../fixtures/testData';

const testHomeProps: IHomeProps = {
	getCategories: jest.fn(),
	categories: testCategories,
	setCategory: jest.fn(),
	isFetching: false,
};

describe('Home page component', () => {
	let component: ReactWrapper<IHomeProps, {}, Home>;
	beforeEach(() => {
		component = mount<Home, IHomeProps, {}>(<Home {...testHomeProps} />);
	});
	it('should render Home page', () => {
		expect(component).toMatchSnapshot();
	});
	it('should not call `getCategories` function', () => {
		expect(component.instance().props.getCategories).toHaveBeenCalledTimes(0);
	});
	describe('When clicking on category', () => {
		it('should call `setCategory` with selected category data', () => {
			component.find('ListGroupItem').at(0).simulate('click');
			expect(component.instance().props.setCategory).toHaveBeenCalledWith(
				testHomeProps.categories[0]
			);
		});
	});
	describe('When there is no category in `categories`', () => {
		let componentWithNoCategory: ShallowWrapper<IHomeProps, {}, Home>;
		const propsWithNoCategory = { ...testHomeProps, categories: [] };
		beforeEach(() => {
			componentWithNoCategory = shallow<Home, IHomeProps, {}>(
				<Home {...propsWithNoCategory} />
			);
		});

		it('should call `getCategories` function', () => {
			expect(
				componentWithNoCategory.instance().props.getCategories
			).toHaveBeenCalledTimes(1);
		});
	});
});
