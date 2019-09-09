import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

//context
import { CartContext } from '../contexts/CartContext';

const Navigation = () => {
	const {cart, removeItem} = useContext(CartContext);

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;