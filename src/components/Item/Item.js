import React from 'react';
import Card from '../Card/Card';

const Item = props => {
	const {title, imgUrl, id, description, price} = props.itemData;
	return <Card title={title} imgUrl={imgUrl} id={id} btnText="Ver Detalle"
		cardBody={() => {
			return <>
				<p className="item-description">{description}</p>
				<p className="item-price">{`$${price}`}</p>
			</>
		}}>
	</Card>
}

export default Item;

