import React from 'react';

const Item = props => {
	const {id, price, title, description, imgUrl} = props.itemData;
	return <div className="item-card">
		<h3 className="item-card-title">{title}</h3>
		<img src={imgUrl} alt={`img-${id}`} className="item-card-img" />
		<div className="item-card-body">
			<p className="item-card-description">{description}</p>
			<p className="item-card-price">{`$${price}`}</p>
		</div>
		<button className="btn btn-dark-green">Ver Detalle</button>
	</div>
}

export default Item;
