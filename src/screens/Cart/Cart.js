import React, {useContext, useState} from 'react';
import {CartContext} from '../../contexts/CartContext/CartContext';
import {CartItem} from './components/CartItem/CartItem';
import {EmptyCart} from './components/EmptyCart/EmptyCart';

export const Cart = () => {
	const {itemsInsideCart, isCartEmpty, cartTotal} = useContext(CartContext);
	const items = itemsInsideCart();
	const [showItem, setShowItem] = useState(true);
	const [showItemList, setShowItemList] = useState(isCartEmpty);
	const handleShowItem = value => setShowItem(value);
	const handleShowItemList = value => setShowItemList(value);
	return showItemList ? <EmptyCart /> : <>
		<div className="cart-list">
			{items.map((item) => showItem &&
				<CartItem key={item.item.id} showItem={handleShowItem} {...item} quantity={item.quantity} changeCartState={handleShowItemList} />)}
		</div>
		<div className="cart-total">
			<h1>Total</h1>
			<h2>{`$${cartTotal()}`}</h2>
		</div>
	</>;
}
