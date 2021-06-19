import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

export const CartWidget = () => {
	return <Link to="\cart" className="nav-link">
		<FontAwesomeIcon icon={faShoppingCart} className="cart-widget-icon" />
	</Link>
}

