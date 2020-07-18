import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { ICategory } from '../../types/category';

export interface ICategoriesProps {
	categories: ICategory[];
	categoryClick: (id: number) => void;
}

const Categories: React.SFC<ICategoriesProps> = ({
	categories,
	categoryClick,
}) => {
	return (
		<ListGroup>
			{categories.map(({ id, title }) => {
				return (
					<ListGroup.Item
						key={id}
						action
						onClick={() => categoryClick(id)}
						variant="secondary"
					>
						{title}
					</ListGroup.Item>
				);
			})}
		</ListGroup>
	);
};

export default Categories;
