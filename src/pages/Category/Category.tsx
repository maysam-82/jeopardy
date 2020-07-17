import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { IStoreState } from '../../redux/reducers/index';
import { ICategory, ISelectedCategory } from '../../types/category.d';
import { getSelectedCategoryData } from '../../redux/actions/categories';
import history from '../../history';

interface ICategoryProps {
	selectedCategory: ICategory;
	selectedCategoryData: ISelectedCategory[];
	getSelectedCategoryData: Function;
	isFetching: boolean;
}

class Category extends React.Component<ICategoryProps> {
	componentDidMount() {
		const {
			selectedCategory: { id },
			getSelectedCategoryData,
		} = this.props;
		if (id) {
			getSelectedCategoryData(id);
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
					<h4>{selectedCategory.title}</h4>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state: IStoreState) => ({
	selectedCategory: state.category.selectedCategory,
	selectedCategoryData: state.category.selectedCategoryData,
	isFetching: state.category.isFetching,
});

export default connect(mapStateToProps, { getSelectedCategoryData })(Category);
