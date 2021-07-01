import React, {useContext} from 'react';
import {CartContext} from '../../../../contexts/CartContext/CartContext';
import Card from '../../../../components/Card/Card';

export const CartItem = ({showItem, item, quantity, changeCartState}) => {
	const {removeFromCart, isCartEmpty} = useContext(CartContext);
	const {id, imgUrl, price, title} = item;
	return <Card title={`${title} (x${quantity})`} imgUrl={imgUrl} id={id}
		cardBody={<p>{`$${price}`}</p>}
		cardButton={
			<button className="btn btn-dark-green" onClick={() => {
				removeFromCart(id);
				showItem(false);
				isCartEmpty() && changeCartState(true);
			}}>Quitar del Carrito</button>
		} />
}

