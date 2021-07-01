import React, {useContext} from 'react';
import {CartContext} from '../../../../contexts/CartContext/CartContext';
import Card from '../../../../components/Card/Card';

export const CartItem = ({item, quantity, changeCartState}) => {
	const {removeFromCart, isCartEmpty} = useContext(CartContext);
	const {id, imgUrl, price, title} = item;
	return <Card title={`${title} (x${quantity})`} imgUrl={imgUrl} id={id}
		cardBody={<p className="cart-item-price">{`$${price}`}</p>}
		cardButton={
			<button className="btn btn-dark-green" onClick={() => {
				removeFromCart(id);
				isCartEmpty() && changeCartState(true);
			}}>Quitar del Carrito</button>
		} />
}

