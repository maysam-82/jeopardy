import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { IStoreState } from '../../redux/reducers/index';
import { ICategory } from '../../types/category.d';
import { getClues } from '../../redux/actions/categories';
import history from '../../history';
import Clues from '../../components/Clues';

export interface ICategoryProps {
	selectedCategory: ICategory;
	getClues: Function;
	isFetching: boolean;
}

export class Category extends React.Component<ICategoryProps> {
	componentDidMount() {
		const {
			selectedCategory: { id },
			getClues,
		} = this.props;
		if (id) {
			getClues(id);
		} else {
			history.push('/');
		}
	}
	render() {
		const { selectedCategory, isFetching } = this.props;
		return (
			<div>
				{isFetching ? (
					<div className="spinner">
						<Spinner animation="border" role="status" variant="info" />
					</div>
				) : (
					<Clues title={selectedCategory.title} />
				)}
			</div>
		);
	}
}

const mapStateToProps = (state: IStoreState) => ({
	selectedCategory: state.category.selectedCategory,
	isFetching: state.category.isFetching,
});

export default connect(mapStateToProps, { getClues })(Category);
