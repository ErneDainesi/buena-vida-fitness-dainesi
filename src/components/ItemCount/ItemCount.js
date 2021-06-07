import React, {useState} from 'react';


const ItemCount = ({productName, stock, initial}) => {
	const [count, setCount] = useState(initial);
	const increaseAmount = () => {
		setCount(count + 1);
	}
	const decreaseAmount = () => {
		setCount(count - 1);
	}

	return <div className="item-count-container">
		<h3 className="product-title">{productName}</h3>
		<div className="amount-toggler">
			<button className="amount-toggler-btn" disabled={count === initial} onClick={() => decreaseAmount()}>-</button>
			<p className="product-amount">{count}</p>
			<button className="amount-toggler-btn" disabled={count === stock} onClick={() => increaseAmount()}>+</button>
		</div>
		<button className="btn btn-light-green add-to-cart-btn">Agregar al carrito</button>
	</div >
}

export default ItemCount;
