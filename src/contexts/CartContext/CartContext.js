import React, {useState, useEffect, createContext} from 'react';

export const CartContext = createContext();

export const CartProvider = props => {
	const [cart, setCart] = useState([]);
	const isInCart = itemId => {
		for (const product of cart) {
			if (product.item.id === itemId) {
				return true;
			}
		}
		return false;
	};
	const updateCart = (item, quantity) => {
		const selectedItem = cart.find(product => product.item.id === item.id);
		const newQuantity = selectedItem.quantity + quantity;
		if (newQuantity <= selectedItem.item.stock) {
			selectedItem.quantity += quantity;
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
	useEffect(() => {
		console.log("Updated Cart", cart);
	});
	return <CartContext.Provider value={{addToCart, emptyCart}}>
		{props.children}
	</CartContext.Provider>
}
