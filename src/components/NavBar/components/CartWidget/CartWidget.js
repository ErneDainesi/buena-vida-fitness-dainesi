import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

export const CartWidget = () => {
	return <a href="\#" className="nav-link">
		<FontAwesomeIcon icon={faShoppingCart} className="cart-widget-icon" />
	</a>
}

