import React, {useState, useEffect, createContext} from 'react';

export const CartContext = createContext();

export const CartProvider = props => {
	const [cart, setCart] = useState([]);
	const addToCart = (item, quantity) => {
		if (!isInCart(item.id)) {
			setCart([...cart, {item, quantity}]);
		} else {
			console.error("Item is already in cart");
		}
	};
	const emptyCart = () => {
		setCart([]);
	};
	const isInCart = itemId => {
		for (const product of cart) {
			if (product.item.id === itemId) {
				return true;
			}
		}
		return false;
	};
	useEffect(() => {
		console.log("Updated Cart", cart);
	});
	return <CartContext.Provider value={{addToCart, emptyCart}}>
		{props.children}
	</CartContext.Provider>
}
