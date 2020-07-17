import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { IStoreState } from '../../redux/reducers/index';
import { ICategory, ISelectedCategory } from '../../types/category.d';
import { getSelectedCategoryData } from '../../redux/actions/categories';
import history from '../../history';

interface ICategoryProps {
	selectedCategory: ICategory;
	selectedCategoryData: ISelectedCategory[];
	getSelectedCategoryData: Function;
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
		console.log(this.props);
		return <Fragment>Category</Fragment>;
	}
}

const mapStateToProps = (state: IStoreState) => ({
	selectedCategory: state.category.selectedCategory,
	selectedCategoryData: state.category.selectedCategoryData,
});

export default connect(mapStateToProps, { getSelectedCategoryData })(Category);
