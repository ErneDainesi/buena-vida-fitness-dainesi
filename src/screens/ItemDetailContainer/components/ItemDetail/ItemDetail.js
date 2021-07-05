import React, {useEffect, useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {EndPurchase} from '../EndPurchase/EndPurchase';
import {getStorageRef} from '../../../../firebase/firebase';

const ItemDetail = item => {
	const {id, price, title, description, stock, imgUrl} = item.detail;
	const [amount, setAmount] = useState(0);
	const [endPurchase, setEndPurchase] = useState();
	const [imgRef, setImgRef] = useState(null);
	const handleAmount = amountToAdd => setAmount(amountToAdd);
	const purchaseSatus = status => setEndPurchase(status);
	useEffect(() => {
		const storageRef = getStorageRef();
		const finalRef = storageRef.child(imgUrl);
		finalRef.getDownloadURL()
			.then(url => {
				setImgRef(url);
			})
			.catch(err => console.error(err));
	}, [imgUrl])
	return <div className="item-detail">
		<img src={imgRef} alt={`img-${id}`} className="item-detail-img" />
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

