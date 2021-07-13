import React, {useState, useContext} from 'react';
import {PurchaseForm} from './PurchaseForm/PurchaseForm';
import {CartContext} from '../../../../../../contexts/CartContext/CartContext';
import {PurchaseContext} from '../../../../../../contexts/PurchaseContext/PurchaseContext';
import {updateItemStock, ordersDataService} from '../../../../../../services/itemDataService';

export const PurchaseFormContainer = props => {
	const {cart, total} = props;
	const {emptyCart} = useContext(CartContext);
	const {handlePurchaseSuccess, handlePurchaseId} = useContext(PurchaseContext);
	const buyerInitialState = {
		name: "",
		telNumber: "",
		email: "",
		emailValidation: "",
	};
	const [buyer, setBuyer] = useState(buyerInitialState);
	const handleBuyer = buyer => setBuyer(buyer);
	const handleSubmit = e => {
		e.preventDefault();
		if (buyer.email !== buyer.emailValidation) {
			console.error("Emails don't match");
			setBuyer({...buyer, emailValidation: ""});
			return false;
		}
		cart.forEach(item => {
			if (item.item.stock < item.quantity) {
				console.error("One item is out of stock");
				setBuyer(buyerInitialState);
				emptyCart();
				return false;
			}
		})
		const newOrder = {
			buyer: {name: buyer.name, telNumber: buyer.telNumber, email: buyer.email},
			items: cart.map(item => {return {id: item.item.id, title: item.item.title, price: item.item.price, quantity: item.quantity}}),
			total: total
		};
		cart.forEach(item => updateItemStock(item.item, item.quantity));
		ordersDataService().add(newOrder)
			.then(({id}) => {
				handlePurchaseId(id);
			})
			.catch(err => console.error(err));
		setBuyer(buyerInitialState);
		emptyCart();
		handlePurchaseSuccess(true);
	};
	return <PurchaseForm handleSubmit={handleSubmit} handleBuyer={handleBuyer} buyer={buyer} />;
}
