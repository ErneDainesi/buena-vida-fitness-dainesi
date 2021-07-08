import React, {useState, useContext} from 'react';
import {PurchaseForm} from './PurchaseForm/PurchaseForm';
import {CartContext} from '../../../../contexts/CartContext/CartContext';
import {updateItemStock, ordersDataService} from '../../../../services/itemDataService';

export const PurchaseFormContainer = props => {
	const {cart, total, changeCartState} = props;
	const {emptyCart} = useContext(CartContext);
	const buyerInitialState = {
		name: "",
		telNumber: "",
		email: "",
	};
	const [buyer, setBuyer] = useState(buyerInitialState);
	const handleBuyer = buyer => setBuyer(buyer);
	const handleSubmit = e => {
		e.preventDefault();
		cart.forEach(item => {
			if (item.item.stock < item.quantity) {
				console.error("One item is out of stock");
				setBuyer(buyerInitialState);
				emptyCart();
				changeCartState(true);
			}
		})
		const newOrder = {
			buyer: {name: buyer.name, telNumber: buyer.telNumber, email: buyer.email},
			items: cart.map(item => {return {id: item.item.id, title: item.item.title, price: item.item.price}}),
			total: total
		};
		cart.forEach(item => updateItemStock(item.item, item.quantity));
		ordersDataService().add(newOrder)
			.then(({id}) => {
				console.log(`Se guardó la orden con id: ${id}`);
			})
			.catch(err => console.error(err));
		setBuyer(buyerInitialState);
		emptyCart();
		changeCartState(true);
	};
	return <PurchaseForm handleSubmit={handleSubmit} handleBuyer={handleBuyer} buyer={buyer} />;
}
