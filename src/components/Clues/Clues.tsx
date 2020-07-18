import React from 'react';
import { IClue } from '../../types/category';
import { IStoreState } from '../../redux/reducers/index';
import { connect } from 'react-redux';
import Clue from '../Clue/Clue';

export interface ICluesProps {
	clues: IClue[];
	title: string;
}

export const Clues: React.SFC<ICluesProps> = ({ clues, title }) => {
	return (
		<div className="clues">
			<h4 className="text-center font-weight-bold">{title}</h4>
			<div className="clues-list">
				{clues.map(({ value, answer, question, id }) => (
					<Clue value={value} answer={answer} question={question} key={id} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state: IStoreState) => ({
	clues: state.category.clues,
});

export default connect(mapStateToProps)(Clues);
