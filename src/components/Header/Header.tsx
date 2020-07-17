import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="header pb-2 pt-2 pl-0 pr-0 border-bottom mb-2 font-weight-bold ">
			<Link to="/" className="badge badge-secondary p-2">
				Home
			</Link>
		</div>
	);
};

export default Header;
