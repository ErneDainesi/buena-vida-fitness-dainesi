import React, {useState} from 'react';

const ItemCount = props => {
	const {stock, changeStock, handlePurchaseStatus, initialAmount} = props;
	const [count, setCount] = useState(initialAmount);
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
			<button className="amount-toggler-btn" disabled={count === stock} onClick={() => increaseAmount()}>+</button>
		</div>
		<button className="btn btn-dark-green add-to-cart-btn" disabled={count < 1} onClick={() => {
			changeStock(count);
			handlePurchaseStatus(true);
		}}>Agregar al carrito</button>
	</div>
}

export default ItemCount;
