import React from 'react';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = item => {
	const {id, price, title, description, imgUrl} = item.detail;
	return <div className="item-detail">
		<img src={imgUrl} alt={`img-${id}`} className="item-detail-img" />
		<div className="item-detail-body">
			<h2 className="item-detail-title">{title}</h2>
			<p className="item-detail-description">{description}</p>
			<p className="item-detail-price">{`$${price}`}</p>
			<ItemCount stock={5} initial={0} />
		</div>

	</div>
}

export default ItemDetail;
