import React from 'react';
import { shallow } from 'enzyme';
import { Clues, ICluesProps } from '../Clues';
import { testClues } from '../../../fixtures/testData';

const testCluesProps: ICluesProps = {
	clues: testClues,
	title: 'test title',
};

describe('Clues component', () => {
	const component = shallow(<Clues {...testCluesProps} />);
	it('should render Clues component', () => {
		expect(component).toMatchSnapshot();
	});
	it('should render 2 `Clue` component', () => {
		expect(component.find('Clue').length).toEqual(2);
	});
	it('should render `title` equals to  `test title`', () => {
		expect(component.find('h4').text()).toEqual(testCluesProps.title);
	});
});
