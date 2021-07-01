import React from 'react';
import Card from '../../../../components/Card/Card';
import {useHistory} from 'react-router-dom';

const Item = props => {
	const {title, imgUrl, id, description, price} = props.itemData;
	const history = useHistory();
	return <Card title={title} imgUrl={imgUrl} id={id}
		cardBody={<>
			<p className="item-description">{description}</p>
			<p className="item-price">{`$${price}`}</p>
		</>} cardButton={
			<button className="btn btn-dark-green" onClick={() =>
				history.push(`/itemDetailContainer/${id}`)}>Ver Detalle
			</button>
		} />
}

export default Item;

