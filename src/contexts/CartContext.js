import React, {useState, useEffect, createContext} from 'react';

export const CartContext = createContext();

export const CartProvider = props => {
	const [cart, setCart] = useState([]);
	const amountIsDifferent = (itemToAdd, amount) => {
		const item = cart[cart.indexOf(itemToAdd)];
		return item.quantity === amount;
	};
	const addToCart = (itemToAdd, amount) => {
		if (!isInCart({itemToAdd, amount})) {
			setCart([...cart, {item: itemToAdd, quantity: amount}]);
		} else if (amountIsDifferent(itemToAdd, amount)) {
			updateCart(itemToAdd, amount);
		}
	};
	const removeFromCart = itemIdToRemove => {
		if (!isInCart(itemIdToRemove)) {
			console.error("Item isn't inside cart");
		} else {
			setCart(cart.filter(element => element.item.id !== itemIdToRemove));
		}
	};
	const emptyCart = () => {
		setCart([]);
	};
	const isInCart = item => {
		return cart.includes(item);
	};
	const updateCart = (item, amount) => {
		const itemToUpdate = cart[cart.indexOf(item)];
		itemToUpdate.quantity = amount;
		setCart(cart);
	};
	useEffect(() => {
		console.log("Updated Cart", cart);
	});
	return <CartContext.Provider value={{addToCart, removeFromCart, emptyCart, isInCart}}>
		{props.children}
	</CartContext.Provider>
}
