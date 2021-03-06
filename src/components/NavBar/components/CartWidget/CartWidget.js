import React, {useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {CartContext} from '../../../../contexts/CartContext/CartContext';

export const CartWidget = props => {
	const {handleMenu} = props;
	const {cartItemQuantity} = useContext(CartContext);
	return <Link to="/cart" className="nav-link" onClick={() => handleMenu(false)}>
		<FontAwesomeIcon icon={faShoppingCart} className="cart-widget-icon" />
		<span className="cart-item-count">{cartItemQuantity()}</span>
	</Link>
}

