import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { ICategory } from '../../types/category.d';
import { IStoreState } from '../../redux/reducers/index';
import { getCategories, setCategory } from '../../redux/actions/categories';
import history from '../../history';
import Categories from '../../components/Categories/Categories';

export interface IHomeProps {
	getCategories: Function;
	categories: ICategory[];
	setCategory: typeof setCategory;
	isFetching: boolean;
}

export class Home extends React.Component<IHomeProps, {}> {
	componentDidMount() {
		const { categories, getCategories } = this.props;
		if (categories.length === 0) {
			getCategories();
		}
	}
	categoryClickHandler = (categoryId: number) => {
		const { setCategory, categories } = this.props;
		const category = categories.find((category) => category.id === categoryId);
		if (category) {
			setCategory(category);
			history.push('/category');
		}
	};

	render() {
		const { isFetching, categories } = this.props;
		return (
			<div className="mb-2">
				{isFetching ? (
					<div className="spinner">
						<Spinner animation="border" role="status" variant="secondary" />
					</div>
				) : (
					<Categories
						categories={categories}
						categoryClick={this.categoryClickHandler}
					/>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state: IStoreState) => ({
	categories: state.category.categories,
	isFetching: state.category.isFetching,
});
export default connect(mapStateToProps, { getCategories, setCategory })(Home);
