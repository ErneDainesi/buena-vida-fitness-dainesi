import React, {useState, useContext} from 'react';
import {CartContext} from '../../../../contexts/CartContext';

const ItemCount = props => {
	const {changeStock, detail, handlePurchaseStatus, initialAmount} = props;
	const [count, setCount] = useState(initialAmount);
	const {addToCart} = useContext(CartContext);
	const increaseAmount = () => {
		setCount(count + 1);
	}
	const decreaseAmount = () => {
		setCount(count - 1);
	}
	return <div className="item-count-container">
		<div className="amount-toggler">
			<button className="amount-toggler-btn" disabled={count === initialAmount} onClick={() => decreaseAmount()}>-</button>
			<p className="product-amount">{count}</p>
			<button className="amount-toggler-btn" disabled={count === detail.stock} onClick={() => increaseAmount()}>+</button>
		</div>
		<button className="btn btn-light-green add-to-cart-btn" disabled={count < 1} onClick={() => {
			changeStock(count);
			addToCart(detail, count);
			handlePurchaseStatus(true);
		}}>Agregar al carrito</button>
	</div>
}

export default ItemCount;
