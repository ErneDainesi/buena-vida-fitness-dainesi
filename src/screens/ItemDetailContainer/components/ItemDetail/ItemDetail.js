import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {EndPurchase} from '../EndPurchase/EndPurchase';

const ItemDetail = item => {
	const {id, price, title, description, stock: initialStock, imgUrl} = item.detail;
	const [stock, setStock] = useState(0);
	const [endPurchase, setEndPurchase] = useState();
	const handleStock = amount => setStock(amount);
	const purchaseSatus = status => setEndPurchase(status);
	return <div className="item-detail">
		<img src={imgUrl} alt={`img-${id}`} className="item-detail-img" />
		<div className="item-detail-body">
			<h2 className="item-detail-title">{title}</h2>
			<p className="item-detail-description">{description}</p>
			<p className="item-detail-price">{`$${price}`}</p>
			{endPurchase ?
				<EndPurchase handlePurchaseStatus={purchaseSatus} changeStock={handleStock} /> :
				<ItemCount stock={initialStock} initialAmount={stock} changeStock={handleStock} handlePurchaseStatus={purchaseSatus} />
			}
		</div>
	</div>
}

export default ItemDetail;
