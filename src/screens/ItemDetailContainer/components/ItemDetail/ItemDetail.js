import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {EndPurchase} from '../EndPurchase/EndPurchase';

const ItemDetail = item => {
	const {id, price, title, description, stock, imgUrl} = item.detail;
	const [amount, setAmount] = useState(0);
	const [endPurchase, setEndPurchase] = useState();
	const handleAmount = amountToAdd => setAmount(amountToAdd);
	const purchaseSatus = status => setEndPurchase(status);
	return <div className="item-detail">
		<img src={imgUrl} alt={`img-${id}`} className="item-detail-img" />
		<div className="item-detail-body">
			<h2 className="item-detail-title">{title}</h2>
			<p className="item-detail-description">{description}</p>
			<p className="item-detail-price">{`$${price}`}</p>
			{endPurchase ?
				<EndPurchase {...item} amount={amount} handlePurchaseStatus={purchaseSatus} changeStock={handleAmount} /> :
				<ItemCount stock={stock} handlePurchaseStatus={purchaseSatus} initialAmount={amount} changeStock={handleAmount} />
			}
		</div>
	</div>
}

export default ItemDetail;
