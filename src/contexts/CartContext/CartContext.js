import React, {useState, useEffect, createContext} from 'react';

export const CartContext = createContext();

export const CartProvider = props => {
	const [cart, setCart] = useState([]);
	const addToCart = (itemToAdd, amount) => {
		if (!isInCart({itemToAdd, amount})) {
			setCart([...cart, {item: itemToAdd, quantity: amount}]);
		}
	};
	const emptyCart = () => {
		setCart([]);
	};
	const isInCart = item => {
		return cart.includes(item);
	};
	useEffect(() => {
		console.log("Updated Cart", cart);
	});
	return <CartContext.Provider value={{addToCart, emptyCart, isInCart}}>
		{props.children}
	</CartContext.Provider>
}
