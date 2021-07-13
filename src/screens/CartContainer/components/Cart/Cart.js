import React, {useContext, useState} from 'react';
import {CartContext} from '../../../../contexts/CartContext/CartContext';
import {CartItem} from './components/CartItem/CartItem';
import {EmptyCart} from './components/EmptyCart/EmptyCart';
import {PurchaseFormContainer} from './components/PurchaseFormContainer/PurchasFormContainer';

export const Cart = () => {
	const {itemsInsideCart, isCartEmpty, cartTotal} = useContext(CartContext);
	const items = itemsInsideCart();
	const [showItemList, setShowItemList] = useState(isCartEmpty);
	const handleShowItemList = value => setShowItemList(value);
	return showItemList ? <EmptyCart /> : <>
		<div className="cart-grid-container">
			<div className="cart">
				<div className="cart-list">
					{items.map((item) => <CartItem key={item.item.id} {...item} quantity={item.quantity} changeCartState={handleShowItemList} />)}
				</div>
				<div className="cart-total">
					<h1>Total</h1>
					<h2>{`$${cartTotal()}`}</h2>
				</div>
			</div>
			<PurchaseFormContainer cart={items} total={cartTotal()} />
		</div>
	</>
}

