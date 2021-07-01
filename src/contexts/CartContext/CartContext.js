import React, {useState, useEffect, createContext} from 'react';

export const CartContext = createContext();

export const CartProvider = props => {
	const [cart, setCart] = useState([]);
	const isInCart = itemId => {
		return cart.findIndex(item => item.item.id === itemId) >= 0;
	}
	const updateCart = (item, quantity) => {
		const selectedItem = cart.find(product => product.item.id === item.id);
		const newQuantity = selectedItem.quantity + quantity;
		if (newQuantity <= selectedItem.item.stock) {
			selectedItem.quantity += quantity;
			setCart([...cart]);
		} else {
			console.error("Selected amount exceeds current stock");
		}
	}
	const addToCart = (item, quantity) => {
		isInCart(item.id) ? updateCart(item, quantity) : setCart([...cart, {item, quantity}]);
	}
	const emptyCart = () => {
		setCart([]);
	};
	const itemsInsideCart = () => {
		return cart;
	}
	const removeFromCart = itemId => {
		const indexOfItem = cart.findIndex(item => item.item.id === itemId);
		cart.splice(indexOfItem, 1);
		setCart([...cart]);
	}
	const isCartEmpty = () => {
		return cart.length === 0;
	}
	const cartItemQuantity = () => {
		let count = 0;
		for (const item of cart) {
			count += item.quantity;
		}
		return count;
	}
	useEffect(() => {
		console.log("Updated Cart", cart);
	});
	return <CartContext.Provider value={{addToCart, emptyCart}}>
		{props.children}
	</CartContext.Provider>
}
