import React from 'react';
import { shallow } from 'enzyme';
import Clue, { IClueProps, IClueState } from '../Clue';

const testClueProps: IClueProps = {
	answer: 'test answer',
	question: 'test question',
	value: 100,
};

describe('Clue component', () => {
	const component = shallow<Clue, IClueProps, IClueState>(
		<Clue {...testClueProps} />
	);
	it('should render Clue component', () => {
		expect(component).toMatchSnapshot();
	});
	it('should have `answer` with value of `test answer`', () => {
		expect(component.find('ListGroupItem').at(2).text()).toEqual(
			testClueProps.answer
		);
	});
	it('should have `question` with value of `test question`', () => {
		expect(component.find('ListGroupItem').at(1).text()).toEqual(
			testClueProps.question
		);
	});
	it('should have `value` with value of `100`', () => {
		expect(component.find('ListGroupItem').at(0).text()).toEqual(
			testClueProps.value.toString()
		);
	});
	it('should have `ListGroupItem` for answer with class name of `answer-hidden`', () => {
		expect(
			component.find('ListGroupItem').at(2).find('.answer-hidden').exists()
		).toBeTruthy();
	});
	describe('When user click on question', () => {
		beforeEach(() => {
			component.find('ListGroupItem').at(1).simulate('click');
		});
		it('should add `answer-visible` class to `ListGroupItem` for answer', () => {
			expect(
				component.find('ListGroupItem').at(2).find('.answer-visible').exists()
			).toBeTruthy();
		});
	});
});
