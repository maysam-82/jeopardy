import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, Spinner } from 'react-bootstrap';
import { ICategory } from '../../types/category.d';
import { IStoreState } from '../../redux/reducers/index';
import { getCategories, setCategory } from '../../redux/actions/categories';
import history from '../../history';

export interface ICategoryProps {
	getCategories: Function;
	categories: ICategory[];
	setCategory: typeof setCategory;
	isFetching: boolean;
}

export class Home extends React.Component<ICategoryProps, {}> {
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
		const { categories, isFetching } = this.props;
		return (
			<div>
				{isFetching ? (
					<div className="spinner">
						<Spinner animation="border" role="status" variant="info" />
					</div>
				) : (
					<ListGroup>
						{categories.map(({ id, title }) => {
							return (
								<ListGroup.Item
									key={id}
									action
									onClick={() => this.categoryClickHandler(id)}
								>
									{title}
								</ListGroup.Item>
							);
						})}
					</ListGroup>
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
